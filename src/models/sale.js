import mongoose from "mongoose";

/**
 * @openapi
 * components:
 *  schemas:
 *    Sale:
 *      type: object
 *      properties:
 *        _id:
 *          type: string
 *          example: 650d0895ecc24b20358b4e99
 *        product_id:
 *          type: string
 *          ref: "products"
 *        paymethod_id:
 *          type: string
 *          ref: "paymethods"
 *        quantity:
 *          type: number
 *          default: 1
 *          min: 1
 *          required: true
 *        sale_at:
 *          type: date
 *          immutable: true
 *      example:
 *        _id: 650d0895ecc24b20358b4e99
 *        product_id: 650d0895ecc24b20358b4e99
 *        paymethod_id: 650cca29cbaa1ff892f26456
 *        quantity: 2
 *        sale_at: 2023-09-22T03:09:17.838+00:00
 */

const saleSchema = new mongoose.Schema({
  product_id: { type: mongoose.Schema.Types.ObjectId, ref: "product", required: true },
  paymethod_id: { type: mongoose.Schema.Types.ObjectId, ref: "paymethod", required: true },
  quantity: { type: Number, default: 1, min: 1, required: true },
  sale_at: { type: Date, immutable: true, default: Date.now },
});

export const Sale = mongoose.model("sale", saleSchema);
