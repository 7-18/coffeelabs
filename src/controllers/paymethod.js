import { Paymethod } from "../models/paymethod.js";

export const createPaymethod = async (req, res) => {
  if (!req.body.name) {
    return res.status(400).send({ message: "Content can not be empty!" });
  }

  const paymethod = new Paymethod({
    name: req.body.name,
  });

  try {
    const savedPaymethod = await paymethod.save();
    return res.status(201).send(savedPaymethod);
  } catch (err) {
    return res.status(400).send({ message: err.message });
  }
};

export const getPaymethods = async (req, res) => {
  const page = parseInt(req.query.p) || 1;
  const limit = parseInt(req.query.limit) || 10;

  try {
    const skip = (page - 1) * limit;
    const paymethods = await Paymethod.find().skip(skip).limit(limit);

    if (paymethods.length === 0) {
      return res.status(404).send({ message: "No paymethods found." });
    }

    const total = await Paymethod.countDocuments();
    const totalPages = Math.ceil(total / limit);

    return res.status(200).json({
      paymethods,
      page,
      totalPages,
    });
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
};

export const getPaymethodById = async (req, res) => {
  try {
    const paymethod = await Paymethod.findOne({ _id: req.params.id });
    return res.status(200).send(paymethod);
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
};

export const updatePaymethod = async (req, res) => {
  try {
    const paymethod = await Paymethod.findOneAndUpdate(
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
    res.status(202).send(paymethod);
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

export const deletePaymethod = async (req, res) => {
  try {
    await Paymethod.findOneAndDelete({
      _id: req.params.id,
    });
    res.status(200).send({ message: "Paymethod deleted successfully." });
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};
