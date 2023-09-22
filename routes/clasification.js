import express from "express";
import * as Clasification from "../controllers/clasification.js";

const router = express.Router();

router.post("/create", Clasification.createClasification);
router.get("/", Clasification.getClasifications);
router.get("/:id", Clasification.getClasificationById);
router.put("/update/:id", Clasification.updateClasification);
router.delete("/delete/:id", Clasification.deleteClasification);

export default router;
