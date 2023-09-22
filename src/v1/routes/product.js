import express from "express";
import * as Product from "../../controllers/product.js";

const router = express.Router();

/**
 * @openapi
 * tags:
 *   name: Product
*/

/**
 * @openapi
 * /api/v1/products:
 *   get:
 *     summary: Get all products
 *     tags: [Product]
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
 *               products:
 *                 type: array
 *                 items:
 *                   $ref: '#/components/schemas/Product'
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
 * /api/v1/products/{id}:
 *   get:
 *     summary: Get one product
 *     tags: [Product]
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
 *             $ref: '#/components/schemas/Product'
 *       500:
 *         description: FAILED
 *         content:
 *          application/json:
 *           schema:
 *             type: object
 *             properties:
 *               message:
 *                 type: string
 * /api/v1/products/create:
 *   post:
 *     summary: Create a product
 *     tags: [Product]
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
 *                 example: Organic Coffee Frappuccino
 *               description:
 *                 type: string
 *                 required: true
 *                 example: Organic Coffee Frappuccino is a coffee drink made by forcing hot water under high pressure through finely ground coffee beans.
 *               stock:
 *                 type: integer
 *                 default: 5
 *               price:
 *                 type: integer
 *                 default: 1.99
 *               clasification_id:
 *                 type: string
 *                 ref: "clasification"
 *                 example: 650d0472b8b6303337f3905a
 *     required:
 *       - name
 *       - description
 *       - stock
 *       - price
 *       - clasification_id
 *     example:
 *       name: Organic Coffee Frappuccino
 *       description: Organic Coffee Frappuccino is a coffee drink made by forcing hot water under high pressure through finely ground coffee beans.
 *       stock: 5
 *       price: 1.99
 *       clasification_id: 650d055db8b6303337f3906a
 *     responses:
 *       201:
 *         description: CREATED
 *         content:
 *          application/json:
 *           schema:
 *             $ref: '#/components/schemas/Product'
 *       500:
 *         description: FAILED
 *         content:
 *          application/json:
 *           schema:
 *             type: object
 *             properties:
 *               message:
 *                 type: string
 * /api/v1/products/update/{id}:
 *   put:
 *     summary: Update a product
 *     tags: [Product]
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
 *                 example: Organic Coffee Frappuccino
 *               description:
 *                 type: string
 *                 required: true
 *                 example: Organic Coffee Frappuccino is a coffee drink made by forcing hot water under high pressure through finely ground coffee beans.
 *               stock:
 *                 type: integer
 *                 default: 5
 *               price:
 *                 type: integer
 *                 default: 1.99
 *               clasification_id:
 *                 type: string
 *                 ref: "clasification"
 *                 example: 650d0472b8b6303337f3905a
 *     required:
 *       - name
 *       - description
 *       - stock
 *       - price
 *       - clasification_id
 *     example:
 *       name: Natural Coffee Espresso
 *       description: Coffee Espress is a coffee drink made by forcing hot water under high pressure through finely ground coffee beans.
 *       stock: 25
 *       price: 1.99
 *       clasification_id: 650cc592013fa8252df78f1e
 *     responses:
 *       202:
 *         description: UPDATED
 *         content:
 *          application/json:
 *           schema:
 *             $ref: '#/components/schemas/Product'
 *       500:
 *         description: FAILED
 *         content:
 *          application/json:
 *           schema:
 *             type: object
 *             properties:
 *               message:
 *                 type: string
 * /api/v1/products/delete/{id}:
 *   delete:
 *     summary: Delete a product
 *     tags: [Product]
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
 * /api/v1/products/clasification/{id}:
 *   get:
 *     summary: Get all products by clasification
 *     tags: [Product]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
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
 *               products:
 *                 type: array
 *                 items:
 *                   $ref: '#/components/schemas/Product'
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
*/

router.get("/", Product.getProducts);
router.get("/:id", Product.getProductById);
router.post("/create", Product.createProduct);
router.put("/update/:id", Product.updateProduct);
router.delete("/delete/:id", Product.deleteProduct);
router.get("/clasification/:id", Product.getProductByClasification);

export default router;
