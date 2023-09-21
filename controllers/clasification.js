import { Clasification } from "../models/clasification.js";

const createClasification = async (req, res) => {
  if (!req.body.name) {
    res.status(400).send({ message: "Content can't be empty!" });
    return;
  }

  const clasification = new Clasification({
    name: req.body.name,
  });

  try {
    const savedClasification = await clasification.save();
    res.status(201).send(savedClasification);
  } catch (err) {
    res.status(400).send({ message: err.message });
  }
};

export default { createClasification };
