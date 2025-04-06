import express from "express";
import { createSensor, deleteSensor, getSensor, getSensors, updateSensor } from "../controllers/sensorController.js";

const router = express.Router();

router.get("/sensors", getSensors);
router.get("/sensors/:id", getSensor);
router.post("/sensors", createSensor);
router.put("/sensors/:id", updateSensor);
router.delete("/sensors/:id", deleteSensor);

export default router;
