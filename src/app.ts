import express from "express";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import compression from "compression";
import cors from "cors";

// Create Express server
const app = express();

import { createRoles } from "./libs/initialSetup";
createRoles();

// Middlewares
app.use(cors({
    credentials: true,
}));

app.use(compression());
app.use(cookieParser());
app.use(bodyParser.json());

export {
    app,
};
