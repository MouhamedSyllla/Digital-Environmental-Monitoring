import { SensorReading } from "../models/index.js";

export const getSensorReadings = async (req, res) => {
  try {
    const { page = 1, perPage = 10 } = req.query.pagination
      ? JSON.parse(req.query.pagination)
      : {};
    const { field = "id", order = "ASC" } = req.query.sort
      ? JSON.parse(req.query.sort)
      : {};
    const filter = req.query.filter ? JSON.parse(req.query.filter) : {};

    const offset = (page - 1) * perPage;

    const sensorReadings = await SensorReading.findAll({
      where: filter.ids ? { id: filter.ids } : {},
      order: [[field, order.toUpperCase()]],
      limit: parseInt(perPage),
      offset: offset,
    });

    const total = Object.keys(sensorReadings).length;

    res.json({ data: sensorReadings, total });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getSensorReading = async (req, res) => {
  try {
    const sensorReading = await SensorReading.findByPk(req.params.id);
    if (!sensorReading)
      return res.status(404).json({ error: "Sensor reading not found" });
    res.status(200).json({ data: sensorReading });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const createSensorReading = async (req, res) => {
  try {
    const newSensorReading = await SensorReading.create(req.body);
    res.status(201).json({ data: newSensorReading });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const updateSensorReading = async (req, res) => {
  try {
    const sensorReading = await SensorReading.findByPk(req.params.id);
    if (!sensorReading)
      return res.status(404).json({ error: "Sensor reading not found" });
    await sensorReading.update(req.body);
    await sensorReading.save();
    res.json({ data: sensorReading });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const deleteSensorReading = async (req, res) => {
  try {
    const sensorReading = await SensorReading.findByPk(req.params.id);
    if (!sensorReading)
      return res.status(404).json({ error: "Sensor reading not found" });
    await SensorReading.destroy();
    res.json({ data: sensorReading });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
