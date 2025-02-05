// import { initDatabase as db } from "./index";
// import fs from "fs";
// import path from "path";
// import csvParser from "csv-parser";
// import { Database } from "better-sqlite3";

// export const insertMoviesFromCsv = async (db: Database) => {
//  const csvFilePath = path.resolve(__dirname, "../../public/Movielist.csv");

//  return new Promise<void>((resolve, reject) => {
//      fs
//          .createReadStream(csvFilePath)
//          .pipe(csvParser({ separator: "," }))
//          .on("data", async (row) => {
//              const winner = row.winner === "yes" ? 1 : 0;
//              const insert = db.prepare(
//                  "INSERT INTO movies (year, title, studios, producers, winner) VALUES (?, ?, ?, ?, ?)"
//              );
//              db.transaction((rows) => {
//                  for (const row of rows)
//                      insert.run(row.year, row.title, row.studios, row.producers, row.winner);
//              })
//        .on("end", () => {
//          console.log("CSV file successfully processed");
//         resolve();
//        })
//        .on("error", (error) => {
//         console.error("Error processing CSV file", error);
//         reject(error);
//        });
//      });
//    }
type MovieRow = {
 year: number;
 title: string;
 studios: string;
 producers: string;
 winner: number;
}[];

import fs from "fs";
import path from "path";
import csvParser from "csv-parser";
import { Database } from "better-sqlite3";

export const insertMoviesFromCsv = async (db: Database) => {
 const csvFilePath = path.resolve(__dirname, "../../public/Movielist.csv");

 return new Promise<void>((resolve, reject) => {
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
    transaction(rows);
    console.log("rows", rows);
    console.log("CSV file successfully processed");
    resolve();
   })
   .on("error", (error) => {
    console.error("Error processing CSV file", error);
    reject(error);
   });
 });
};
