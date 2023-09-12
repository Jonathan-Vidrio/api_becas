import { Router } from "express";
import { authenticationController } from "../controllers/authentication.controller";

// Routes
export default (router: Router) => {
    router.post("/register", authenticationController.register);
    router.post("/login", authenticationController.login);
};