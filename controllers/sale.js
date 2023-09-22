import { Sale } from "../models/sale.js";
import { Product } from "../models/product.js";
import { getWeather } from "../services/weather-api.js";

export const createSale = async (req, res) => {
  if (!req.body.product_id || !req.body.paymethod_id || !req.body.quantity) {
    return res.status(400).send({ message: "Content can not be empty!" });
  }

  try {
    const product = await Product.findById(req.body.product_id);

    if (!product) {
      return res.status(404).send({ message: "Product not found" });
    }

    if (req.body.quantity > product.stock) {
      return res
        .status(400)
        .send({ message: "Not enough stock available for this product" });
    }

    const temp = await getWeather("Bogota");
    const sale = new Sale({
      product_id: req.body.product_id,
      paymethod_id: req.body.paymethod_id,
      quantity: req.body.quantity,
    });

    const savedSale = await sale.save();

    await Product.findOneAndUpdate(
      { _id: req.body.product_id },
      {
        $inc: { stock: -req.body.quantity },
      }
    );

    return res.status(201).json({
      message: `Sale created successfully. The current temperature in CoffeeLabs is ${temp.current.temp_c}°C.`,
      data: savedSale,
    });
  } catch (err) {
    return res.status(400).send(err);
  }
};

export const getSales = async (req, res) => {
  try {
    const sales = await Sale.find();
    return res.status(200).send(sales);
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
};

export const getSaleById = async (req, res) => {
  try {
    const sale = await Sale.findOne({ _id: req.params.id });
    return res.status(200).send(sale);
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
};
