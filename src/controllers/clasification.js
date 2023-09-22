import { Clasification } from "../models/clasification.js";

export const createClasification = async (req, res) => {
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

export const getClasifications = async (req, res) => {
  const page = parseInt(req.query.p) || 1;
  const limit = parseInt(req.query.limit) || 10;

  try {
    const skip = (page - 1) * limit;
    const clasifications = await Clasification.find().skip(skip).limit(limit);

    if (clasifications.length === 0) {
      return res.status(404).send({ message: "No clasifications found." });
    }

    const total = await Clasification.countDocuments();
    const totalPages = Math.ceil(total / limit);

    return res.status(200).json({
      clasifications,
      page,
      totalPages,
    });
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
}

export const updateClasification = async (req, res) => {
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
    res.status(202).send(clasification);
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

export const deleteClasification = async (req, res) => {
  try {
    await Clasification.findOneAndDelete({
      _id: req.params.id,
    });
    res.status(200).send({ message: "Clasification deleted successfully." });
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};
