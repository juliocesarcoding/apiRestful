import { Router } from "express";
import movieRoutes from "./movieRoutes";
import awardRoutes from "./awardRoutes";
import databaseRoutes from "./databaseRoutes";

const router = Router();

router.use("/movies", movieRoutes);
router.use("/awards", awardRoutes);
router.use("/database", databaseRoutes);

export default router;
