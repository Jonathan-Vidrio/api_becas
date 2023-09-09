import { Router } from "express";
import { userController } from "controllers/user";

const router = Router();

// Routes

router.get("/", userController.getAllUsers);

router.get("/:id", userController.getUserById);