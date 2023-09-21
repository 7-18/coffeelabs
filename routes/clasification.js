import express from "express";
import Clasification from "../controllers/clasification.js";

const router = express.Router();

router.post("/create", Clasification.createClasification);

export default router;
