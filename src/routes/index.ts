import { Router } from "express";
import movieRoutes from "./movieRoutes";
import awardRoutes from "./awardRoutes";

const router = Router();

router.use("/movies", movieRoutes);
router.use("/awards", awardRoutes);

export default router;
