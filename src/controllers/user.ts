import { Request, Response} from "express";
import UserModel from "../models/User";

/*
STATUS CODES
200: OK
201: Created
204: No Content
400: Bad Request
401: Unauthorized
403: Forbidden
404: Not Found
500: Internal Server Error
*/

const getAllUsers = async (req: Request, res: Response) => {
    try {
        const users = await UserModel.find();
        return res.status(200).json(users);
    } catch (error) {
        return res.status(500).json(error);
    };
};

const getUserById = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const user = await UserModel.findById(id);
        return res.status(200).json(user);
    } catch (error) {
        return res.status(500).json(error);
    };
};

const createUser = async (req: Request, res: Response) => {
    try {

    } catch (error) {
        return res.status(500).json(error);
    }
};

const updateUsername = async (req: Request, res: Response) => {
    try {

    } catch (error) {
        return res.status(500).json(error);
    }
};

const updateUserPassword = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const { password } = req.body;

        if (!password) {
            return res.status(400).json({ message: "Password is required" });
        }

        const updatedUser = await UserModel.findByIdAndUpdate(id, {
            password
        });

        return res.status(200).json(updatedUser);

    } catch (error) {
        return res.status(500).json(error);
    }
};

const updateUserEmail = async (req: Request, res: Response) => {
    try {

    } catch (error) {
        return res.status(500).json(error);
    }
}

const deleteUser = async (req: Request, res: Response) => {
    try {

    } catch (error) {
        return res.status(500).json(error);
    }
};

export const userController = {
    getAllUsers,
    getUserById,
    //createUser,
    //updateUsername,
    //updateUserEmail,
    updateUserPassword,
    deleteUser
};