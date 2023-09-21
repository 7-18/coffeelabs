import mongoose from "mongoose";

const clasificationSchema = new mongoose.Schema({
  name: { type: String, required: true },
  register_at: { type: Date, default: Date.now },
});

export const Clasification = mongoose.model("clasification", clasificationSchema);
