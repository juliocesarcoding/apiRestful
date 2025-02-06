import { Router } from "express";
import { getAwards } from "../controllers/awardController";

const router = Router();

router.get("/", getAwards);

export default router;
