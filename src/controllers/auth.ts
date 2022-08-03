import { RequestHandler } from 'express';
import jwt from 'jsonwebtoken';
import { createUser, findUser } from './user';
import bcrypt from 'bcryptjs';
import { IUser } from '../schemas/User';

const expiresIn = Math.floor(Date.now() / 1000) + 60 * 60;

export const signUp: RequestHandler = async (req, res) => {
    try {
        const newUser = await createUser(req.body);
        const accessToken = jwt.sign(
            {
                exp: expiresIn,
                data: newUser
            },
            process.env.SECRET as string
        );
        res.send({
            access_token: accessToken,
            token_type: 'Bearer',
            expires_in: expiresIn,
            data: newUser
        });
    } catch (error) {

        return res.status(409).send(error);
    }
};

export const signIn: RequestHandler = async (req, res) => {
    try {
        const credentials: Pick<IUser, 'email' | 'password'> = req.body;
        const user = (await findUser(credentials)) || null;
        if (user === null) {
            return res.sendStatus(400);
        }
        if (user?.email !== credentials.email) {
            return res.sendStatus(401);
        }
        bcrypt.compare(credentials.password, user.password, (err) => {
            if (err) return res.sendStatus(401);
            const accessToken = jwt.sign(
                {
                    exp: expiresIn,
                    data: user
                },
                process.env.SECRET as string
            );
            res.send({
                access_token: accessToken,
                token_type: 'Bearer',
                expires_in: expiresIn,
                data: user
            });
        });
    } catch (error) {

        return res.status(401).send(error);
    }
};

export const refreshToken = () => {
    console.log('dsadsa');
};
