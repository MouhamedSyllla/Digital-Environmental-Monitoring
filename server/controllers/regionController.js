import { Region } from "../models/index.js";

export const getRegions = async (req, res) => {
  try {
    const { page = 1, perPage = 10 } = req.query.pagination
      ? JSON.parse(req.query.pagination)
      : {};
    const { field = "id", order = "ASC" } = req.query.sort
      ? JSON.parse(req.query.sort)
      : {};
    const filter = req.query.filter ? JSON.parse(req.query.filter) : {};

    const offset = (page - 1) * perPage;

    const regions = await Region.findAll({
      where: filter.ids ? { id: filter.ids } : {},
      order: [[field, order.toUpperCase()]],
      limit: parseInt(perPage),
      offset: offset,
    });

    const total = Object.keys(regions).length;

    res.json({ data: regions, total });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
};

export const getRegion = async (req, res) => {
  try {
    const region = await Region.findByPk(req.params.id);
    if (!region) return res.status(404).json({ error: "Region not found" });
    res.status(200).json({ data: region });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const createRegion = async (req, res) => {
  try {
    const newRegion = await Region.create(req.body);
    res.status(201).json({ data: newRegion });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const updateRegion = async (req, res) => {
  try {
    const region = await Region.findByPk(req.params.id);
    if (!region) return res.status(404).json({ error: "Region not found" });
    await region.update(req.body);
    await region.save();
    res.json({ data: region });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const deleteRegion = async (req, res) => {
  try {
    const region = await Region.findByPk(req.params.id);
    if (!region) return res.status(404).json({ error: "Region not found" });
    await region.destroy();
    res.json({ data: region });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
