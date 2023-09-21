import mongoose from "mongoose";

const saleSchema = new mongoose.Schema({
  product_id: { type: mongoose.Schema.Types.ObjectId, ref: "product", required: true },
  paymethod_id: { type: mongoose.Schema.Types.ObjectId, ref: "paymethod", required: true },
  quantity: { type: Number, required: true },
  sale_at: { type: Date, default: Date.now },
});

export const Sale = mongoose.model("sale", saleSchema);
