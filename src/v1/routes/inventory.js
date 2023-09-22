import express from "express";
import * as Inventory from "../../controllers/inventory.js";

const router = express.Router();

/**
 * @openapi
 * tags:
 *   name: Inventory
 */

/**
 * @openapi
 * /api/v1/inventory/total-stock:
 *   get:
 *     summary: Get total stock available
 *     tags: [Inventory]
 *     responses:
 *       200:
 *         description: OK
 *         content:
 *          application/json:
 *           schema:
 *             type: object
 *             properties:
 *               totalStock:
 *                 type: integer
 *                 example: 100
 *         500:
 *          description: FAILED
 *          content:
 *           application/json:
 *            schema:
 *             type: object
 *             properties:
 *               message:
 *                 type: string
 * /api/v1/inventory/total-sales:
 *   get:
 *     summary: Get total sales
 *     tags: [Inventory]
 *     responses:
 *       200:
 *         description: OK
 *         content:
 *          application/json:
 *           schema:
 *             type: object
 *             properties:
 *               totalSales:
 *                 type: integer
 *                 example: 100
 *         500:
 *          description: FAILED
 *          content:
 *           application/json:
 *            schema:
 *             type: object
 *             properties:
 *               message:
 *                 type: string
*/

router.get("/total-stock", Inventory.getTotalStock);
router.get("/total-sales", Inventory.getTotalSales);

export default router;
