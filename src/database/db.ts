import Database from "better-sqlite3";
import { insertMoviesFromCsv } from "./seed";

const db = new Database(":memory:");

export const initDatabase = () => {
 const createTable = `
CREATE TABLE IF NOT EXISTS movies (
id INTEGER PRIMARY KEY AUTOINCREMENT,
    year INTEGER,
    title TEXT,
    studios TEXT,
    producers TEXT,
    winner BOOLEAN
);
`;
 db.exec(createTable);
 insertMoviesFromCsv(db);
};

export default db;
