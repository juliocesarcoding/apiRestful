import { insertMoviesFromCsv } from "../database/seed";
import db from "../database/index";

type Response = {
 error: string | null;
 message: string | null;
};

export const populateDatabase = async (): Promise<Response> => {
 try {
  // Check if the database is already populated
  const dataCount = db
   .prepare("SELECT COUNT(*) as count FROM movies")
   .get() as unknown as { count: number };

  if (dataCount.count > 0) {
   return { error: "Database is already populated.", message: null };
  }

  // 🔹 Wait for CSV data to be inserted before returning response
  const result = await insertMoviesFromCsv(db);
  return result;
 } catch (error) {
  console.error(" Error while populating the database:", error);
  return {
   error: "Unexpected error while populating the database.",
   message: null,
  };
 }
};
