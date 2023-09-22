import swaggerJsdoc from "swagger-jsdoc";
import { serve, setup } from "swagger-ui-express";

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "CoffeeLabs API",
      version: "1.0.0",
    },
    basePath: "/api/v1",
  },
  apis: ["./src/v1/routes/*.js", "./src/db/db.js", "./src/models/*.js"],
};

const specs = swaggerJsdoc(options);

export const docs = (app, port) => {
  app.use("/api/v1/docs", serve, setup(specs));
  app.get("/api/v1/docs.json", (req, res) => {
    res.setHeader("Content-Type", "application/json");
    res.send(specs);
  });

  console.log(`Docs are available at http://localhost:${port}/api/v1/docs`);
};
