import express from "express";
import compression from "compression";
import bodyParser from "body-parser";

// Controllers (route handlers)
import * as homeController from "./controllers/home";

// Create Express server
const app = express();


// Express configuration
app.set("port", process.env.PORT || 3000);
app.use(compression());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

/**
 * Server routes.
 */
app.get("/", homeController.index);

export default app;