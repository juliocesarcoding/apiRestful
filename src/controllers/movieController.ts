import { Request, Response } from "express";
import { get } from "http";
import { getAllMovies, getMovieById } from "../services/movieService";

export const getMovies = (req: Request, res: Response) => {
 const movies = getAllMovies();
 res.status(200).json(movies);
};

export const getMovie = (req: Request, res: Response) => {
 const movie = getMovieById(Number(req.params.id));
 if (Number(req.params.id) && !movie) {
  res.status(404).send("Movie not found");
  return;
 } else if (!Number(req.params.id)) {
  res.status(400).send("Invalid ID");
 }
 res.status(200).json(movie);
};
