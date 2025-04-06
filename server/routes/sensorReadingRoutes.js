import express from "express";
import { createSensorReading, deleteSensorReading, getSensorReading, getSensorReadings, updateSensorReading } from "../controllers/sensorReadingController.js";

const router = express.Router();

router.get("/sensor-readings", getSensorReadings);
router.get("/sensor-readings/:id", getSensorReading);
router.post("/sensor-readings", createSensorReading);
router.put("/sensor-readings/:id", updateSensorReading);
router.delete("/sensor-readings/:id", deleteSensorReading);

export default router;
