import { Request, Response } from "express";
import { getAllMovies, getMovieById } from "../services/movieService";
import { sendError, sendSuccess } from "../utils/responseHandler";

export const getMovies = (req: Request, res: Response) => {
 const movies = getAllMovies();
 if (!movies) {
  sendError(res, "No movies found", null, 404);
  return;
 }
 sendSuccess(res, "Movies found", movies);
};

export const getMovie = (req: Request, res: Response) => {
 const movie = getMovieById(Number(req.params.id));
 if (Number(req.params.id) && !movie) {
  sendError(res, "Movie not found", null, 404);
  return;
 } else if (!Number(req.params.id)) {
  sendError(res, "Invalid movie ID", null, 400);
  return;
 }
 sendSuccess(res, "Movie found", movie);
};
