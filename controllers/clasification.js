import { Clasification } from "../models/clasification.js";

const createClasification = async (req, res) => {
  if (!req.body.name) {
    return res.status(400).send({ message: "Content can't be empty!" });
  }

  const clasification = new Clasification({
    name: req.body.name,
  });

  try {
    const savedClasification = await clasification.save();
    return res.status(201).send(savedClasification);
  } catch (err) {
    return res.status(400).send({ message: err.message });
  }
};

const getClasifications = async (req, res) => {
  try {
    const clasifications = await Clasification.find();
    if (clasifications.length === 0) {
      return res.status(404).send({ message: "No clasifications found." });
    }
    return res.send(clasifications);
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
};

const getClasificationById = async (req, res) => {
  try {
    const clasification = await Clasification.findOne({ _id: req.params.id });
    return res.send(clasification);
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
};

const updateClasification = async (req, res) => {
  try {
    const clasification = await Clasification.findOneAndUpdate(
      { _id: req.params.id },
      {
        name: req.body.name,
        update_at: Date.now(),
      },
      {
        new: true,
        setDefaultsOnInsert: true,
      }
    );
    res
      .status(202)
      .send({ message: "Clasification updated successfully." }, clasification);
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

const deleteClasification = async (req, res) => {
  try {
    await Clasification.findOneAndDelete({
      _id: req.params.id,
    });
    res.status(200).send({ message: "Clasification deleted successfully." });
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

export default {
  createClasification,
  getClasifications,
  getClasificationById,
  updateClasification,
  deleteClasification,
};
