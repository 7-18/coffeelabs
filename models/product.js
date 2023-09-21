import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  stock: { type: Number, required: true },
  price: { type: Number, required: true },
  clasification_id: { type: mongoose.Schema.Types.ObjectId, ref: "clasification", required: true },
  register_at: { type: Date, default: Date.now },
});

export const Product = mongoose.model("product", productSchema);
