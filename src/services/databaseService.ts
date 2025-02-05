import { insertMoviesFromCsv } from "../database/seed";
import db, { initDatabase } from "../database/index";
import Database from "better-sqlite3";

type Response = {
 error: string | null;
 message: string | null;
};

export const populateDatabase = async (): Promise<Response> => {
 try {
  // 🔹 Ensure the "movies" table exists before querying it
  //   const test = new Database(":memory:");
  initDatabase();

  // 🔹 Now check if the database is already populated
  const dataCount = db
   .prepare("SELECT COUNT(*) as count FROM movies")
   .get() as unknown as { count: number };

  if (dataCount.count > 0) {
   return { error: "Database is already populated.", message: null };
  }

  // 🔹 Populate the database with CSV data
  const result = await insertMoviesFromCsv(db);
  return result;
 } catch (error) {
  console.error("❌ Error while populating the database:", error);
  return {
   error: "Unexpected error while populating the database.",
   message: null,
  };
 }
};
