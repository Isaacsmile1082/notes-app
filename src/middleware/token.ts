import { RequestHandler } from 'express';
import jwt from 'jsonwebtoken';
import { berearRegex } from '../utils/regexs';

export const verifyToken: RequestHandler = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    if (!authHeader) {
        return res.sendStatus(400);
    }
    const regexResult = berearRegex.exec(authHeader);

    if (!regexResult) return res.sendStatus(400);
    const token = regexResult[2];
    try {
        const decoded = jwt.verify(token, process.env.SECRET as string);
        req.user = decoded;
        next();
    } catch (error) {
        return res.status(409).send({ error });
    }
};
