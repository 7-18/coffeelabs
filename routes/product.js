import express from "express";
import Product from "../controllers/product.js";

const router = express.Router();

router.post("/create", Product.createProduct);

export default router;
