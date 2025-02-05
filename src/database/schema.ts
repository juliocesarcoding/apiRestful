import db from "./db";

// Create a table with the specified schema
export const createTable = `
CREATE TABLE IF NOT EXISTS movies (
id INTEGER PRIMARY KEY AUTOINCREMENT,
    year INTEGER,
    title TEXT,
    studios TEXT,
    producers TEXT,
    winner BOOLEAN
);
`;

// Execute the SQL command
db.exec(createTable);

// Close the database connection
db.close();
