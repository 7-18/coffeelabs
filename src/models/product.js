import mongoose from "mongoose";

/**
 * @openapi
 * components:
 *   schemas:
 *    Product:
 *      type: object
 *      properties:
 *        _id:
 *          type: string
 *          example: 650cc99ccbaa1ff892f26452
 *        name:
 *          type: string
 *          minLength: 2
 *          required: true
 *          example: Organic Coffee Frappuccino
 *        description:
 *          type: string
 *          required: true
 *          example: Organic Coffee Frappuccino is a coffee drink made by forcing hot water under high pressure through finely ground coffee beans.
 *        stock:
 *          type: number
 *          default: 0
 *          min: 0
 *          required: true
 *        price:
 *          type: number
 *          default: 0
 *          min: 0
 *          required: true
 *        classification_id:
 *          type: string
 *          ref: "classifications"
 *        register_at:
 *          type: date
 *          immutable: true
 *        update_at:
 *          type: date
 *      example:
 *        _id: 650cc99ccbaa1ff892f26452
 *        name: Organic Coffee Frappuccino
 *        description: Organic Coffee Frappuccino is a coffee drink made by forcing hot water under high pressure through finely ground coffee beans.
 *        stock: 5
 *        price: 1.99
 *        classification_id: 650d055db8b6303337f3906a
 *        register_at: 2023-09-22T03:09:17.838+00:00
 *        update_at: 2023-09-22T13:45:02.838+00:00
 */

const productSchema = new mongoose.Schema({
  name: { type: String, minLength: 2, required: true },
  description: { type: String, required: true },
  stock: { type: Number, default: 0, min: 0, required: true },
  price: { type: Number, default: 0, min: 0, required: true },
  classification_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "classification",
    required: true,
  },
  register_at: { type: Date, immutable: true, default: Date.now },
  update_at: { type: Date, default: Date.now },
});

export const Product = mongoose.model("product", productSchema);
