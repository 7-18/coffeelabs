import express from "express";
import Sales from "../controllers/sale.js";

const router = express.Router();

router.post("/create", Sales.createSale);
router.get("/", Sales.getSales);
router.get("/:id", Sales.getSaleById);

export default router;
