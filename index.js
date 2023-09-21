import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { dbConnection } from "./db/db.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

dbConnection();
