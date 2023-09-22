import express from "express";
import * as Sales from "../../controllers/sale.js";

const router = express.Router();

/**
 * @openapi
 * tags:
 *   name: Sale
 */

/**
 * @openapi
 * /api/v1/sales:
 *   get:
 *     summary: Get all sales
 *     tags: [Sale]
 *     parameters:
 *       - in: query
 *         name: p
 *         schema:
 *           type: integer
 *         default: 1
 *         description: Page
 *       - in: query
 *         name: limit
 *         schema:
 *           type: integer
 *         default: 10
 *         description: Limit
 *     responses:
 *       200:
 *         description: OK
 *         content:
 *          application/json:
 *           schema:
 *             type: object
 *             properties:
 *               sales:
 *                 type: array
 *                 items:
 *                   $ref: '#/components/schemas/Sale'
 *                 page:
 *                   type: integer
 *                 totalPages:
 *                   type: integer
 *       500:
 *         description: FAILED
 *         content:
 *          application/json:
 *           schema:
 *             type: object
 *             properties:
 *               message:
 *                 type: string
 * /api/v1/sales/{id}:
 *   get:
 *     summary: Get one sale
 *     tags: [Sale]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *     responses:
 *       200:
 *         description: OK
 *         content:
 *          application/json:
 *           schema:
 *             $ref: '#/components/schemas/Sale'
 *       500:
 *         description: FAILED
 *         content:
 *          application/json:
 *           schema:
 *             type: object
 *             properties:
 *               message:
 *                 type: string
 * /api/v1/sales/create:
 *   post:
 *     summary: Create a sale
 *     tags: [Sale]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               product_id:
 *                 type: string
 *                 ref: "products"
 *                 required: true
 *                 example: 650e03d42b05aa856ed40ea2
 *               paymethod_id:
 *                 type: string
 *                 ref: "paymethods"
 *                 required: true
 *                 example: 650cc99ccbaa1ff892f26452
 *               quantity:
 *                 type: number
 *                 default: 1
 *                 min: 1
 *                 required: true
 *     responses:
 *       201:
 *         description: CREATED
 *         content:
 *          application/json:
 *           schema:
 *             $ref: '#/components/schemas/Sale'
 *       500:
 *         description: FAILED
 *         content:
 *          application/json:
 *           schema:
 *             type: object
 *             properties:
 *               message:
 *                 type: string
 */

router.get("/", Sales.getSales);
router.get("/:id", Sales.getSaleById);
router.post("/create", Sales.createSale);

export default router;
