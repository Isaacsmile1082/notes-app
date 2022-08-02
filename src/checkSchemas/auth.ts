import { checkSchema } from 'express-validator';

export const getTokenCheckSchema = checkSchema({
    token: {
        in: ['headers']
    }
});

export const getEmailAndPasswordCheckSchema = checkSchema({
    email: {
        isString: true,
        isEmail: true,
        notEmpty: true
    },
    password: {
        isString: true,
        isStrongPassword: true,
        notEmpty: true
    }
});
