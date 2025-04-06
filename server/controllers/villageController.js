import { Village } from "../models/index.js";

export const getVillages = async (req, res) => {
  try {
    const { page = 1, perPage = 10 } = req.query.pagination
      ? JSON.parse(req.query.pagination)
      : {};
    const { field = "id", order = "ASC" } = req.query.sort
      ? JSON.parse(req.query.sort)
      : {};
    const filter = req.query.filter ? JSON.parse(req.query.filter) : {};

    const offset = (page - 1) * perPage;

    const villages = await Village.findAll({
      where: filter.ids ? { id: filter.ids } : {},
      order: [[field, order.toUpperCase()]],
      limit: parseInt(perPage),
      offset: offset,
    });

    const total = Object.keys(villages).length;

    res.json({ data: villages, total });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getVillage = async (req, res) => {
  try {
    const village = await Village.findByPk(req.params.id);
    if (!village) return res.status(404).json({ error: "Village not found" });
    res.status(200).json({ data: village });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const createVillage = async (req, res) => {
  try {
    const newVillage = await Village.create(req.body);
    res.status(201).json({ data: newVillage });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const updateVillage = async (req, res) => {
  try {
    const village = await Village.findByPk(req.params.id);
    if (!village) return res.status(404).json({ error: "Village not found" });
    await village.update(req.body);
    await village.save();
    res.json({ data: village });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const deleteVillage = async (req, res) => {
  try {
    const village = await Village.findByPk(req.params.id);
    if (!village) return res.status(404).json({ error: "Village not found" });
    await village.destroy();
    res.json({ data: village });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
