import express from "express";
import * as Clasification from "../../controllers/clasification.js";

const router = express.Router();

router
  .get("/", Clasification.getClasifications)
  .post("/create", Clasification.createClasification)
  .put("/update/:id", Clasification.updateClasification)
  .delete("/delete/:id", Clasification.deleteClasification);

export default router;
