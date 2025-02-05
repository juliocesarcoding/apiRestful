import Database from "better-sqlite3";
import { createTable } from "./schema";
import { insertMoviesFromCsv } from "./seed";

export const initDatabase = async () => {
 const db = new Database(":memory:", { verbose: console.log });
 await db.exec(createTable);
 await insertMoviesFromCsv(db);
};
