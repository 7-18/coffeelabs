import { Paymethod } from "../models/paymethod.js";

const createPaymethod = async (req, res) => {
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

const getPaymethods = async (req, res) => {
  try {
    const paymethods = await Paymethod.find();
    if (paymethods.length === 0) {
      return res.status(404).send({ message: "No paymethods found." });
    }
    return res.status(200).send(paymethods);
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
};

const getPaymethodById = async (req, res) => {
  try {
    const paymethod = await Paymethod.findOne({ _id: req.params.id });
    return res.status(200).send(paymethod);
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
};

const updatePaymethod = async (req, res) => {
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
    res
      .status(202)
      .send({ message: "Paymethod updated successfully." }, paymethod);
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

const deletePaymethod = async (req, res) => {
  try {
    await Paymethod.findOneAndDelete({
      _id: req.params.id,
    });
    res.status(200).send({ message: "Paymethod deleted successfully." });
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

export default {
  createPaymethod,
  getPaymethods,
  getPaymethodById,
  updatePaymethod,
  deletePaymethod,
};
