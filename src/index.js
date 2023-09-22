import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { dbConnection } from "./db/db.js";
import Product_v1 from "./v1/routes/product.js";
import Paymethod_v1 from "./v1/routes/paymethod.js";
import Classification_v1 from "./v1/routes/classification.js";
import Sales_v1 from "./v1/routes/sale.js";
import Inventory_v1 from "./v1/routes/inventory.js";
import { docs as docs_v1 } from "./v1/openapi/swagger.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT ?? 3000;

app.use(cors());
app.use(express.json());

app.use("/api/v1/products", Product_v1);
app.use("/api/v1/classifications", Classification_v1);
app.use("/api/v1/paymethods", Paymethod_v1);
app.use("/api/v1/sales", Sales_v1);
app.use("/api/v1/inventory", Inventory_v1);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  docs_v1(app, PORT);
});

dbConnection();
