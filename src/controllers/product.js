import { Product } from "../models/product.js";

export const createProduct = async (req, res) => {
  if (
    !req.body.name ||
    !req.body.description ||
    !req.body.stock ||
    !req.body.price ||
    !req.body.clasification_id
  ) {
    return res.status(400).send({ message: "Content can not be empty!" });
  }

  const product = new Product({
    name: req.body.name,
    description: req.body.description,
    stock: req.body.stock,
    price: req.body.price,
    clasification_id: req.body.clasification_id,
  });

  try {
    const savedProduct = await product.save();
    return res.status(201).send(savedProduct);
  } catch (err) {
    return res.status(400).send(err);
  }
};

export const getProducts = async (req, res) => {
  const page = parseInt(req.query.p) || 1;
  const limit = parseInt(req.query.limit) || 10;

  try {
    const skip = (page - 1) * limit;
    const products = await Product.find().skip(skip).limit(limit);

    if (products.length === 0) {
      return res.status(404).send({ message: "No products found." });
    }

    const total = await Product.countDocuments();
    const totalPages = Math.ceil(total / limit);

    return res.status(200).json({
      products,
      page,
      totalPages,
    });
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
};

export const getProductById = async (req, res) => {
  try {
    const product = await Product.findOne({ _id: req.params.id });
    return res.status(200).send(product);
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
};

export const getProductByClasification = async (req, res) => {
  const page = parseInt(req.query.p) || 1;
  const limit = parseInt(req.query.limit) || 10;

  try {
    const skip = (page - 1) * limit;
    const products = await Product.find({ clasification_id: req.params.id })
      .skip(skip)
      .limit(limit);

    if (products.length === 0) {
      return res.status(404).send({ message: "No products found." });
    }

    const total = await Product.countDocuments();
    const totalPages = Math.ceil(total / limit);

    return res.status(200).json({
      products,
      page,
      totalPages,
    });
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
};

export const updateProduct = async (req, res) => {
  try {
    const product = await Product.findOneAndUpdate(
      { _id: req.params.id },
      {
        name: req.body.name,
        description: req.body.description,
        stock: req.body.stock,
        price: req.body.price,
        clasification_id: req.body.clasification_id,
        update_at: Date.now(),
      },
      {
        new: true,
        setDefaultsOnInsert: true,
      }
    );
    return res.status(202).send(product);
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
};

export const deleteProduct = async (req, res) => {
  try {
    await Product.findOneAndDelete({ _id: req.params.id });
    return res.status(200).send({ message: "Product deleted successfully." });
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
};
