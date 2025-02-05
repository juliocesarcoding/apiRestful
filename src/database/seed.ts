import fs from "fs";
import path from "path";
import csvParser from "csv-parser";
import { Database } from "better-sqlite3";

type MovieRow = {
 year: number;
 title: string;
 studios: string;
 producers: string;
 winner: number;
}[];

type Response = {
 error: string | null;
 message: string | null;
};

export const insertMoviesFromCsv = async (db: Database): Promise<Response> => {
 const csvFilePath = path.resolve(__dirname, "../../public/Movielist.csv");

 return new Promise<Response>((resolve) => {
  try {
   // Check if the CSV file exists before reading it
   if (!fs.existsSync(csvFilePath)) {
    return resolve({
     error: `CSV file not found at ${csvFilePath}`,
     message: null,
    });
   }

   const insert = db.prepare(
    "INSERT INTO movies (year, title, studios, producers, winner) VALUES (?, ?, ?, ?, ?)"
   );
   const transaction = db.transaction((rows) => {
    for (const row of rows) {
     insert.run(row.year, row.title, row.studios, row.producers, row.winner);
    }
   });

   const rows: MovieRow = [];
   fs
    .createReadStream(csvFilePath)
    .pipe(csvParser({ separator: ";" }))
    .on("data", (row) => {
     const winner = row.winner === "yes" ? 1 : 0;
     rows.push({ ...row, winner });
    })
    .on("end", () => {
     if (rows.length === 0) {
      return resolve({
       error: "CSV file is empty or improperly formatted.",
       message: null,
      });
     }

     transaction(rows);
     console.log(" CSV file processed successfully!");
     resolve({ error: null, message: "Database populated successfully!" });
    })
    .on("error", (error) => {
     console.error(" Error processing the CSV file:", error);
     resolve({
      error: "Error processing the CSV file.",
      message: null,
     });
    });
  } catch (error) {
   console.error(" Unexpected error while inserting data:", error);
   resolve({
    error: "Unexpected error while inserting data.",
    message: null,
   });
  }
 });
};
