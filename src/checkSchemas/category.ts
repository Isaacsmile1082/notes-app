import { checkSchema } from 'express-validator';

export const categoryCreateCheckSchema = checkSchema({
    name: {
        in: ['body'],
        isString: true,
        notEmpty: true
    }
});

export const categoryDeleteCheckSchema = checkSchema({
    id: {
        in: ['body'],
        isString: true,
        notEmpty: true
    }
});

export const categoryUpdateCheckSchema = checkSchema({
    id: {
        in: ['body'],
        isString: true,
        notEmpty: true
    },
    name: {
        in: ['body'],
        isString: true,
        notEmpty: true
    }
});
