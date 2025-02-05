import { Router } from "express";

import * as MovieController from "../controllers/movieController";

const router = Router();

router.get("/", MovieController.getMovies);
router.get("/:id", MovieController.getMovie);

export default router;
