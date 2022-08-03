import { TDocNotes } from './../types/Notes.d';
import express from 'express';
import Note from '../schemas/Notes';
import jwt from 'jsonwebtoken';
export const createNote = async (
    req: express.Request,
    res: express.Response
) => {
    const encoded: jwt.JwtPayload | undefined = req.user;
    const note = new Note({
        ...req.body,
        author: encoded?.data?._id
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

export const deleteNote = async (
    req: express.Request,
    res: express.Response
) => {
    try {
        await Note.findOneAndDelete({ _id: req.body._id });
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

export const updateNote = async (
    req: express.Request,
    res: express.Response
) => {
    const { _id, ...rest }: TDocNotes = req.body;

    try {
        const updatedNote = await Note.findOneAndUpdate(_id, rest, {
            returnDocument: 'after'
        });
        console.log(updatedNote);

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
