import db from "../database/db";
export const getAllMovies = () => {
 return db.prepare("SELECT * FROM movies").all();
};
export const getMovieById = (id: number) => {
 return db.prepare("SELECT * FROM movies WHERE id = ?").get(id);
};
