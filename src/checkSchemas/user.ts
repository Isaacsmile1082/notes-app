import { checkSchema } from 'express-validator';

export const createUserCheckSchema = checkSchema({
    name: {
        in: ['body'],
        isString: true,
        notEmpty: true
    },
    lastName: {
        in: ['body'],
        isString: true,
        notEmpty: true
    },
    phoneNumber: {
        in: ['body'],
        isString: true,
        notEmpty: true
    },
    email: {
        in: ['body'],
        isEmail: true,
        isString: true,
        notEmpty: true
    },
    password: {
        in: ['body'],
        isStrongPassword: true,
        isString: true
    }
});

export const updateUserCheckSchema = checkSchema({
    id: {
        in: ['body'],
        isString: true,
        notEmpty: true
    },
    name: {
        in: ['body'],
        isString: true,
        notEmpty: true
    },
    lastName: {
        in: ['body'],
        isString: true,
        notEmpty: true
    },
    phoneNumber: {
        in: ['body'],
        isString: true,
        notEmpty: true
    },
    email: {
        in: ['body'],
        isEmail: true,
        isString: true,
        notEmpty: true
    },
    password: {
        in: ['body'],
        isStrongPassword: true,
        isString: true
    }
});

export const deleteUserCheckSchema = () =>
    checkSchema({
        id: {
            in: ['body'],
            isString: true,
            notEmpty: true
        }
    });

export const getUserCheckSchema = () =>
    checkSchema({
        id: {
            in: ['body'],
            isString: true,
            notEmpty: true
        }
    });
