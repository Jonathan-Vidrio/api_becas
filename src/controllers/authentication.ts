import { Request, Response } from "express";
import User from "models/User";

const register = async (req: Request, res: Response) => {
    try {
        const { username, password, email, roles } = req.body;

        const foundUsername = await User.findOne({ username: username });
        if (!foundUsername) return res.status(400).json({ message: "Username already exists" });

        const foundEmail = await User.findOne({ email: email });
        if (!foundEmail) return res.status(400).json({ message: "Email already exists" });

        const newUser = new User({ });
    } catch (error) {
        return res.status(400).json(error);
    }
};

const login = async (req: Request, res: Response) => {
    try {

    } catch (error) {
        return res.status(400).json(error);
    }
};

export const authenticationController = {
    register,
    login
};