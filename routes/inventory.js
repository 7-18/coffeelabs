import express from "express";
import * as Inventory from "../controllers/inventory.js";

const router = express.Router();

router.get("/total-stock", Inventory.getTotalStock);
router.get("/total-sales", Inventory.getTotalSales);

export default router;
