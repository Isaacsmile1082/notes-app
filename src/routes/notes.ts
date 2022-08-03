import { createNote, deleteNote, updateNote } from './../controllers/notes';
import {
    createNoteCheckSchema,
    deleteNoteCheckSchema,
    updateNoteCheckSchema
} from './../checkSchemas/notes';
import express from 'express';
import Note from '../schemas/Notes';
import { verifyToken } from '../middleware/token';
import { validateInput } from '../middleware/validateInput';

const router = express.Router();

router.use(verifyToken);

router.get('/', async (req, res) => {
    const notes = await Note.find({});
    res.json({
        ok: true,
        notes
    });
});

router.post('/', createNoteCheckSchema, validateInput, createNote);

router.delete('/', deleteNoteCheckSchema, validateInput, deleteNote);

router.patch('/', updateNoteCheckSchema, validateInput, updateNote);

export default router;
