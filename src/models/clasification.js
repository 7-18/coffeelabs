import mongoose from "mongoose";

const clasificationSchema = new mongoose.Schema({
  name: { type: String, minLength: 2, required: true },
  register_at: { type: Date, immutable: true, default: Date.now },
  update_at: { type: Date, default: Date.now },
});

export const Clasification = mongoose.model(
  "clasification",
  clasificationSchema
);
