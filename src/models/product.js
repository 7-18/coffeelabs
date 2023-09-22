import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  name: { type: String, minLength: 2, required: true },
  description: { type: String, required: true },
  stock: { type: Number, default: 0, min: 0, required: true },
  price: { type: Number, default: 0, min: 0, required: true },
  clasification_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "clasification",
    required: true,
  },
  register_at: { type: Date, immutable: true, default: Date.now },
  update_at: { type: Date, default: Date.now },
});

export const Product = mongoose.model("product", productSchema);
