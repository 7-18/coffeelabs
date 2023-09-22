import { Classification } from "../models/classification.js";

export const createClassification = async (req, res) => {
  if (!req.body.name) {
    return res.status(400).send({ message: "Content can't be empty!" });
  }

  const classification = new Classification({
    name: req.body.name,
  });

  try {
    const savedClassification = await classification.save();
    return res.status(201).send(savedClassification);
  } catch (err) {
    return res.status(400).send({ message: err.message });
  }
};

export const getClassifications = async (req, res) => {
  const page = parseInt(req.query.p) || 1;
  const limit = parseInt(req.query.limit) || 10;

  try {
    const skip = (page - 1) * limit;
    const classifications = await Classification.find().skip(skip).limit(limit);

    if (classifications.length === 0) {
      return res.status(404).send({ message: "No classifications found." });
    }

    const total = await Classification.countDocuments();
    const totalPages = Math.ceil(total / limit);

    return res.status(200).json({
      classifications,
      page,
      totalPages,
    });
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
};

export const updateClassification = async (req, res) => {
  try {
    const classification = await Classification.findOneAndUpdate(
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
    res.status(202).send(classification);
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

export const deleteClassification = async (req, res) => {
  try {
    await Classification.findOneAndDelete({
      _id: req.params.id,
    });
    res.status(200).send({ message: "Classification deleted successfully." });
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};
