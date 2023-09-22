import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

export const dbConnection = async () => {
  try {
    mongoose.connect(process.env.DB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("You successfully connected to MongoDB!");
  } catch (e) {
    console.log("Error connecting to MongoDB: \n" + e);
  }
};
