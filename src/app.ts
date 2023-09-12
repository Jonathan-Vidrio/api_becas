import express from "express";
import bodyParser from "body-parser";
import compression from "compression";
import cors from "cors";

import { createRoles } from "./libs/initialSetup";

import router from "./router";

// Create Express server
const app = express();

createRoles();

// Middlewares
app.use(cors({
    credentials: true,
}));

app.use(compression());
app.use(bodyParser.json());

app.use("/api", router());

export {
    app,
};