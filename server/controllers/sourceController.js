import { Source } from "../models/index.js";

export const getSources = async (req, res) => {
  try {
    const { page = 1, perPage = 10 } = req.query.pagination
      ? JSON.parse(req.query.pagination)
      : {};
    const { field = "id", order = "ASC" } = req.query.sort
      ? JSON.parse(req.query.sort)
      : {};
    const filter = req.query.filter ? JSON.parse(req.query.filter) : {};

    const offset = (page - 1) * perPage;

    const sources = await Source.findAll({
      where: filter.ids ? { id: filter.ids } : {},
      order: [[field, order.toUpperCase()]],
      limit: parseInt(perPage),
      offset: offset,
    });

    const total = Object.keys(sources).length;

    res.json({ data: sources, total });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getSource = async (req, res) => {
  try {
    const source = await Source.findByPk(req.params.id);
    if (!source) return res.status(404).json({ error: "Source not found" });
    res.status(200).json({ data: source });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const createSource = async (req, res) => {
  try {
    const newSource = await Source.create(req.body);
    res.status(201).json({ data: newSource });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const updateSource = async (req, res) => {
  try {
    const source = await Source.findByPk(req.params.id);
    if (!source) return res.status(404).json({ error: "Source not found" });
    await source.update(req.body);
    await source.save();
    res.json({ data: source });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const deleteSource = async (req, res) => {
  try {
    const source = await Source.findByPk(req.params.id);
    if (!source) return res.status(404).json({ error: "Source not found" });
    await source.destroy();
    res.json({ data: source });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
