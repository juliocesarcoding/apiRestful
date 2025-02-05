import { Router } from "express";
import { populateDatabase } from "../controllers/databaseController";

const router = Router();

router.post("/populate", populateDatabase);

export default router;
