import express from "express";
import swaggerJSDoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";

export const router = express.Router();

const options = {
  swaggerDefinition: {
    info: {
      title: "CO3043",
      version: "1.0.0",
      description: "CO3043 exercise",
    },
    tags: [
      {
        name: "auth",
        description: "Authentication",
      },
      {
        name: "locations",
        description: "Locations",
      },
    ],
    schemes: [""],
    host: "localhost:5000",
    basePath: "/api",
  },
  apis: ["./routes/*.js", "./models/*.js"],
};

const swaggerSpec = swaggerJSDoc(options);

router.get("/json", (req, res) => {
  res.setHeader("Content-Type", "application/json");
  res.send(swaggerSpec);
});

router.use("/", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

export default router;
