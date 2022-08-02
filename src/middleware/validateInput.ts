import { RequestHandler } from 'express';
import { validationResult } from 'express-validator';

export const validateInput: RequestHandler = (req, res, next) => {
    validationResult(req);
    const result = validationResult(req);
    if (result.array().length) {
        return res.sendStatus(400);
    }
    next();
};