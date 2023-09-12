import { Request, Response } from "express";
import User from "../models/user.model";
import { IUser } from "../interface/user.interface";
import Role from "../models/role.model";

const register = async (req: Request, res: Response) => {
    try {
        const { username, email, password, roles } = req.body;

        /*
        const foundUsername = await User.findOne({ username: username });
        if (!foundUsername) return res.status(400).json({ message: "Username already exists" });

        const foundEmail = await User.findOne({ email: email });
        if (!foundEmail) return res.status(400).json({ message: "Email already exists" });
        */

        const newUser: IUser = new User({
            username: username,
            email: email,
            password: await User.encryptPassword(password),
        });

        console.log(newUser);
        
        if (roles) {
            const foundRole = await Role.find({ name: { $in: roles}});
            newUser.roles = foundRole.map(role => role._id);
        } else {
            const role = await Role.findOne({ name: 'scholar' });
            newUser.roles = [role._id];
        };

        const savedUser = await newUser.save();
        return res.status(200).json(savedUser);

    } catch (error) {
        return res.status(400).json(error);
    }
};

const login = async (req: Request, res: Response) => {
    try {
        res.json("login");
    } catch (error) {
        return res.status(400).json(error);
    }
};

export const authenticationController = {
    register,
    login
};