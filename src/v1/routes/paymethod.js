import express from "express";
import * as Paymethod from "../../controllers/paymethod.js";

const router = express.Router();

/**
 * @openapi
 * tags:
 *   name: Paymethod
 */

/**
 * @openapi
 * /api/v1/paymethods:
 *   get:
 *     summary: Get all paymethods
 *     tags: [Paymethod]
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
 *               paymethods:
 *                 type: array
 *                 items:
 *                   $ref: '#/components/schemas/Paymethod'
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
 * /api/v1/paymethods/{id}:
 *   get:
 *     summary: Get one paymethod
 *     tags: [Paymethod]
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
 *             $ref: '#/components/schemas/Paymethod'
 *       500:
 *         description: FAILED
 *         content:
 *          application/json:
 *           schema:
 *             type: object
 *             properties:
 *               message:
 *                 type: string
 * /api/v1/paymethods/create:
 *   post:
 *     summary: Create a paymethod
 *     tags: [Paymethod]
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *              type: object
 *              properties:
 *                name:
 *                  type: string
 *                  minLength: 4
 *                  required: true
 *                  example: Cash
 *       required:
 *        - name
 *     responses:
 *       201:
 *         description: CREATED
 *         content:
 *          application/json:
 *           schema:
 *              $ref: '#/components/schemas/Paymethod'
 *       500:
 *         description: FAILED
 *         content:
 *          application/json:
 *           schema:
 *             type: object
 *             properties:
 *               message:
 *                 type: string
 * /api/v1/paymethods/update/{id}:
 *   put:
 *     summary: Update a paymethod
 *     tags: [Paymethod]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 minLength: 4
 *                 required: true
 *                 example: Cash
 *       required:
 *        - name
 *     example:
 *       name: Cash
 *     responses:
 *       202:
 *         description: UPDATED
 *         content:
 *          application/json:
 *           schema:
 *             $ref: '#/components/schemas/Paymethod'
 *       500:
 *         description: FAILED
 *         content:
 *          application/json:
 *           schema:
 *             type: object
 *             properties:
 *               message:
 *                 type: string
 * /api/v1/paymethods/delete/{id}:
 *   delete:
 *     summary: Delete a paymethod
 *     tags: [Paymethod]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *     responses:
 *       200:
 *         description: DELETED
 *         content:
 *          application/json:
 *           schema:
 *             type: object
 *             properties:
 *               message:
 *                 type: string
 */

router.get("/", Paymethod.getPaymethods);
router.get("/:id", Paymethod.getPaymethodById);
router.post("/create", Paymethod.createPaymethod);
router.put("/update/:id", Paymethod.updatePaymethod);
router.delete("/delete/:id", Paymethod.deletePaymethod);

export default router;
