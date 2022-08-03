import User, { IUser } from '../schemas/User';
import bcrypt from 'bcryptjs';
import dotenv from 'dotenv';
dotenv.config();
import jwt from 'jsonwebtoken';
import { RequestHandler } from 'express';

export const createUser = async (userData: IUser) => {
    const newUser = userData;
    const existingUser = await User.findOne({ email: newUser.email });
    if (existingUser) {
        throw new Error('This user already exists');
    }
    try {
        const hash = await bcrypt.hash(process.env['SECRET'] as string, 10);
        const user = new User({
            ...newUser,
            password: hash
        });
        await user.save();
        return user;
    } catch (error) {
        console.error(error);
        throw new Error('Error while saving');
    }
};

export const findUser = async (
    userCredentials: Pick<IUser, 'email' | 'password'>
) => {
    try {
        const user = await User.findOne({ email: userCredentials.email });
        return user;
    } catch (error) {
        console.error(error);
        throw new Error('Error performing finding user');
    }
};

export const updateUser: RequestHandler = async (req, res) => {
    const data: IUser = req.body;
    const encoded: jwt.JwtPayload | undefined = req.user;

    try {
        const updatedUser = await User.findOneAndUpdate(
            {
                id: encoded?.data?._id
            },
            data,
            {
                returnDocument: 'after'
            }
        );

        return res.json({
            ok: true,
            updatedUser
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            ok: false,
            error
        });
    }
};

export const deleteNote: RequestHandler = async (req, res) => {
    try {
        const encoded: jwt.JwtPayload | undefined = req.user;
        await User.findOneAndDelete({ _id: encoded?.data?._id });
        return res.json({
            ok: true
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            ok: false,
            error
        });
    }
};
