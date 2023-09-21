import mongoose from "mongoose";

const paymethodSchema = new mongoose.Schema({
  name: { type: String, required: true },
  register_at: { type: Date, default: Date.now },
});

export const Paymethod = mongoose.model("paymethod", paymethodSchema);
