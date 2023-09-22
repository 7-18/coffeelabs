import mongoose from "mongoose";

/**
 * @openapi
 * components:
 *  schemas:
 *    Classification:
 *      type: object
 *      properties:
 *        _id:
 *          type: string
 *          example: 650d055db8b6303337f3906a
 *        name:
 *          type: string
 *          minLength: 2
 *          required: true
 *          example: Ground Coffee
 *        register_at:
 *          type: date
 *          immutable: true
 *          example: 2023-09-22T03:09:17.838+00:00
 *        update_at:
 *          type: date
 *          example: 2023-09-22T13:45:02.838+00:00
 *      example:
 *        _id: 650d055db8b6303337f3906a
 *        name: Ground Coffee
 *        register_at: 2023-09-22T03:09:17.838+00:00
 *        update_at: 2023-09-22T13:45:02.838+00:00
 */
const classificationSchema = new mongoose.Schema({
  name: { type: String, minLength: 2, required: true },
  register_at: { type: Date, immutable: true, default: Date.now },
  update_at: { type: Date, default: Date.now },
});

export const Classification = mongoose.model(
  "classification",
  classificationSchema
);
