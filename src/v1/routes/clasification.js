import express from "express";
import * as Clasification from "../../controllers/clasification.js";

const router = express.Router();

/**
 * @openapi
 * tags:
 *   name: Clasification
 */

/**
 * @openapi
 * /api/v1/clasifications:
 *   get:
 *     summary: Get all clasifications
 *     tags: [Clasification]
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
 *               clasifications:
 *                 type: array
 *                 items:
 *                   $ref: '#/components/schemas/Clasification'
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
 * /api/v1/clasifications/create:
 *   post:
 *     summary: Create a clasification
 *     tags: [Clasification]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 minLength: 2
 *                 required: true
 *                 example: Black Coffee
 *     required:
 *       - name
 *     example:
 *       name: Black Coffee
 *     responses:
 *       201:
 *         description: CREATED
 *         content:
 *          application/json:
 *           schema:
 *             $ref: '#/components/schemas/Clasification'
 *       500:
 *         description: FAILED
 *         content:
 *          application/json:
 *           schema:
 *             type: object
 *             properties:
 *               message:
 *                 type: string
 * /api/v1/clasifications/update/{id}:
 *   put:
 *     summary: Update a clasification
 *     tags: [Clasification]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 minLength: 2
 *                 required: true
 *                 example: Black Coffee
 *     required:
 *       - name
 *     example:
 *       name: Black Coffee
 *     responses:
 *       202:
 *         description: ACCEPTED
 *         content:
 *          application/json:
 *           schema:
 *             $ref: '#/components/schemas/Clasification'
 *       500:
 *         description: FAILED
 *         content:
 *          application/json:
 *           schema:
 *             type: object
 *             properties:
 *               message:
 *                 type: string
 * /api/v1/clasifications/delete/{id}:
 *   delete:
 *     summary: Delete a clasification
 *     tags: [Clasification]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *     responses:
 *       200:
 *         description: DELETED
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

router
  .get("/", Clasification.getClasifications)
  .post("/create", Clasification.createClasification)
  .put("/update/:id", Clasification.updateClasification)
  .delete("/delete/:id", Clasification.deleteClasification);

export default router;
