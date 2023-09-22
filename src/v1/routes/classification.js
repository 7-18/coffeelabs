import express from "express";
import * as Classification from "../../controllers/classification.js";

const router = express.Router();

/**
 * @openapi
 * tags:
 *   name: Classification
 */

/**
 * @openapi
 * /api/v1/classifications:
 *   get:
 *     summary: Get all classifications
 *     tags: [Classification]
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
 *               classifications:
 *                 type: array
 *                 items:
 *                   $ref: '#/components/schemas/Classification'
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
 * /api/v1/classifications/create:
 *   post:
 *     summary: Create a classification
 *     tags: [Classification]
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
 *             $ref: '#/components/schemas/Classification'
 *       500:
 *         description: FAILED
 *         content:
 *          application/json:
 *           schema:
 *             type: object
 *             properties:
 *               message:
 *                 type: string
 * /api/v1/classifications/update/{id}:
 *   put:
 *     summary: Update a classification
 *     tags: [Classification]
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
 *             $ref: '#/components/schemas/Classification'
 *       500:
 *         description: FAILED
 *         content:
 *          application/json:
 *           schema:
 *             type: object
 *             properties:
 *               message:
 *                 type: string
 * /api/v1/classifications/delete/{id}:
 *   delete:
 *     summary: Delete a classification
 *     tags: [Classification]
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
  .get("/", Classification.getClassifications)
  .post("/create", Classification.createClassification)
  .put("/update/:id", Classification.updateClassification)
  .delete("/delete/:id", Classification.deleteClassification);

export default router;
