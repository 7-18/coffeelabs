import express from "express";
import Paymethod from "../controllers/paymethod.js";

const router = express.Router();

router.post("/create", Paymethod.createPaymethod);
router.get("/", Paymethod.getPaymethods);
router.get("/:id", Paymethod.getPaymethodById);
router.put("/update/:id", Paymethod.updatePaymethod);
router.delete("/delete/:id", Paymethod.deletePaymethod);

export default router;
