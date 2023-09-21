import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { dbConnection } from "./db/db.js";
import Product from "./routes/product.js";
import Clasification from "./routes/clasification.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.use("/api/product", Product);
app.use("/api/clasification", Clasification);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

dbConnection();
