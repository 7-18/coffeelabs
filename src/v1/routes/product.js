import express from "express";
import * as Product from "../../controllers/product.js";

const router = express.Router();

router.post("/create", Product.createProduct);
router.get("/", Product.getProducts);
router.get("/:id", Product.getProductById);
router.get("/clasification/:id", Product.getProductByClasification);
router.put("/update/:id", Product.updateProduct);
router.delete("/delete/:id", Product.deleteProduct);

export default router;
