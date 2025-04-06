import { Sensor } from "../models/index.js";

export const getSensors = async (req, res) => {
  try {
    const { page = 1, perPage = 10 } = req.query.pagination
      ? JSON.parse(req.query.pagination)
      : {};
    const { field = "id", order = "ASC" } = req.query.sort
      ? JSON.parse(req.query.sort)
      : {};
    const filter = req.query.filter ? JSON.parse(req.query.filter) : {};

    const offset = (page - 1) * perPage;

    const sensors = await Sensor.findAll({
      where: filter.ids ? { id: filter.ids } : {},
      order: [[field, order.toUpperCase()]],
      limit: parseInt(perPage),
      offset: offset,
    });

    const total = Object.keys(sensors).length;

    res.json({ data: sensors, total });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getSensor = async (req, res) => {
  try {
    const sensor = await Sensor.findByPk(req.params.id);
    if (!sensor) return res.status(404).json({ error: "Sensor not found" });
    res.status(200).json({ data: sensor });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const createSensor = async (req, res) => {
  try {
    const newSensor = await Sensor.create(req.body);
    res.status(201).json({ data: newSensor });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const updateSensor = async (req, res) => {
  try {
    const sensor = await Sensor.findByPk(req.params.id);
    if (!sensor) return res.status(404).json({ error: "Sensor not found" });
    await sensor.update(req.body);
    await sensor.save();
    res.json({ data: sensor });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const deleteSensor = async (req, res) => {
  try {
    const sensor = await Sensor.findByPk(req.params.id);
    if (!sensor) return res.status(404).json({ error: "Sensor not found" });
    await sensor.destroy();
    res.json({ data: sensor });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
