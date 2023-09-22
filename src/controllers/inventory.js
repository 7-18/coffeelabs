import { Product } from "../models/product.js";
import { Sale } from "../models/sale.js";

export const getTotalStock = async (req, res) => {
  try {
    const products = await Product.aggregate([
      {
        $group: {
          _id: null,
          totalStock: { $sum: "$stock" },
        },
      },
    ]).exec();
    return res.status(200).send({
      totalStock: products[0].totalStock,
    });
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
};

export const getTotalSales = async (req, res) => {
  try {
    const sales = await Sale.aggregate([
      {
        $group: {
          _id: null,
          totalSales: { $sum: "$quantity" },
        },
      },
    ]).exec();
    return res.status(200).send({
      totalSales: sales[0].totalSales,
    });
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
}