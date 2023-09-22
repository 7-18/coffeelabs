import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { dbConnection } from "./db/db.js";
import Product from "./routes/product.js";
import Paymethod from "./routes/paymethod.js";
import Clasification from "./routes/clasification.js";
import Sales from "./routes/sale.js";
import Inventory from "./routes/inventory.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT ?? 3000;

app.use(cors());
app.use(express.json());

app.use("/api/products", Product);
app.use("/api/clasifications", Clasification);
app.use("/api/paymethods", Paymethod);
app.use("/api/sales", Sales);
app.use("/api/inventory", Inventory);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

dbConnection();
