import { Router } from "express";
import { userController } from "../controllers/user.controller";

// Routes
export default (router: Router) => {
    router.get("/users", userController.getAllUsers);
    router.get("/users/:id", userController.getUserById);
};