import { Router } from "express";
import { getProducersIntervals } from "../controllers/awardController";

const router = Router();

router.get("/", getProducersIntervals);

export default router;
