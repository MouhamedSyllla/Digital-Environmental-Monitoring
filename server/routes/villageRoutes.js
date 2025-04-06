import express from "express";
import { createVillage, deleteVillage, getVillage, getVillages, updateVillage } from "../controllers/villageController.js";

const router = express.Router();

router.get("/villages", getVillages);
router.get("/villages/:id", getVillage);
router.post("/villages", createVillage);
router.put("/villages/:id", updateVillage);
router.delete("/villages/:id", deleteVillage);

export default router;