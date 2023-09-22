import mongoose from "mongoose";

const paymethodSchema = new mongoose.Schema({
  name: { type: String, minLength: 4, required: true },
  register_at: { type: Date, immutable: true, default: Date.now() },
  update_at: { type: Date, default: Date.now() },
});

export const Paymethod = mongoose.model("paymethod", paymethodSchema);
