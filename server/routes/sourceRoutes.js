import express from "express";
import { createSource, deleteSource, getSource, getSources, updateSource } from "../controllers/sourceController.js";

const router = express.Router();

router.get("/sources", getSources);
router.get("/sources/:id", getSource);
router.post("/sources", createSource);
router.put("/sources/:id", updateSource);
router.delete("/sources/:id", deleteSource);

export default router;
