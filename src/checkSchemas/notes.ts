import { checkSchema } from 'express-validator';

export const createNoteCheckSchema = checkSchema({
    title: {
        in: ['body'],
        errorMessage: 'title is wrong',
        isString: true,
        notEmpty: true,
        trim: true
    },
    description: {
        in: ['body'],
        errorMessage: 'description is wrong',
        isString: true,
        notEmpty: true,
        trim: true
    },
    date: {
        in: ['body'],
        errorMessage: 'Something went wrong with date',
        isDate: true,
        notEmpty: true
    },
    favorite: {
        in: ['body'],
        errorMessage: 'Something went wrong with favorite',
        isBoolean: true
    },
    image: {
        in: ['body'],
        errorMessage: 'Something went wrong with image',
        isString: true
    }
});

export const deleteNoteCheckSchema = checkSchema({
    _id: {
        in: ['body'],
        errorMessage: 'Missing or inapropiate id',
        isString: true,
        notEmpty: true
    }
});

export const updateNoteCheckSchema = checkSchema({
    _id: {
        in: ['body'],
        errorMessage: 'Missing or inapropiate id',
        isString: true,
        notEmpty: true
    },
    title: {
        in: ['body'],
        errorMessage: 'title is wrong',
        isString: true,
        notEmpty: true,
        trim: true
    },
    author: {
        in: ['body'],
        errorMessage: 'author is wrong',
        isString: true,
        notEmpty: true,
        trim: true
    },
    description: {
        in: ['body'],
        errorMessage: 'description is wrong',
        isString: true,
        notEmpty: true,
        trim: true
    },
    date: {
        in: ['body'],
        errorMessage: 'Something went wrong with date',
        isDate: true,
        notEmpty: true
    },
    favorite: {
        in: ['body'],
        errorMessage: 'Something went wrong with favorite',
        isBoolean: true
    },
    image: {
        in: ['body'],
        errorMessage: 'Something went wrong with image',
        isString: true
    }
});

export const getNotesCheckSchema = checkSchema({
    author: {
        in: ['body'],
        errorMessage: 'Missing or inapropiate author',
        isString: true,
        notEmpty: true
    }
});
