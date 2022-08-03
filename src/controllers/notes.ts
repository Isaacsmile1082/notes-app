import { TDocNotes } from './../types/Notes.d';
import { RequestHandler } from 'express';
import Note from '../schemas/Notes';
import jwt from 'jsonwebtoken';
export const createNote: RequestHandler = async (
    req,
    res
) => {
    const encoded: jwt.JwtPayload | undefined = req.user;
    const note = new Note({
        ...req.body,
        author: encoded?.data?._id,
        date: new Date()
    });
    try {
        await note.save();
        res.json({
            ok: true,
            note
        });
    } catch (error) {
        res.json({
            ok: false,
            error
        });
    }
};

export const deleteNote: RequestHandler = async (
    req,
    res
) => {
    try {
        const encoded: jwt.JwtPayload | undefined = req.user;
        await Note.findOneAndDelete({ _id: req.body._id, author: encoded?.data?._id });
        return res.json({
            ok: true
        });
    } catch (error) {
        res.status(500).json({
            ok: false,
            error
        });
    }
};

export const updateNote: RequestHandler = async (
    req,
    res
) => {
    const { _id, ...rest }: TDocNotes = req.body;
    const encoded: jwt.JwtPayload | undefined = req.user;

    try {
        const updatedNote = await Note.findOneAndUpdate({
            id: _id, author: encoded?.data?._id
        }, rest, {
            returnDocument: 'after'
        });

        return res.json({
            ok: true,
            updatedNote
        });
    } catch (error) {
        res.status(500).json({
            ok: false,
            error
        });
    }
};
