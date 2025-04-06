import express from "express";
import { createRegion, deleteRegion, getRegion, getRegions, updateRegion } from "../controllers/regionController.js";

const router = express.Router();

router.get("/regions", getRegions);
router.get("/regions/:id", getRegion);
router.post("/regions", createRegion);
router.put("/regions/:id", updateRegion);
router.delete("/regions/:id", deleteRegion);

export default router;