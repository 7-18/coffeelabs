import mongoose from "mongoose";

/**
 * @openapi
 * components:
 *  schemas:
 *   Paymethod:
 *    type: object
 *    properties:
 *      _id:
 *        type: string
 *        example: 650cc99ccbaa1ff892f26452
 *      name:
 *        type: string
 *        minLength: 4
 *        required: true
 *        example: Cash
 *      register_at:
 *        type: date
 *        immutable: true
 *        example: 2023-09-22T03:09:17.838+00:00
 *      update_at:
 *        type: date
 *        example: 2023-09-22T13:45:02.838+00:00
 *    example:
 *      _id: 650cc99ccbaa1ff892f26452
 *      name: Cash
 *      register_at: 2023-09-22T03:09:17.838+00:00
 *      update_at: 2023-09-22T13:45:02.838+00:00
 */
  
const paymethodSchema = new mongoose.Schema({
  name: { type: String, minLength: 4, required: true },
  register_at: { type: Date, immutable: true, default: Date.now() },
  update_at: { type: Date, default: Date.now() },
});

export const Paymethod = mongoose.model("paymethod", paymethodSchema);
