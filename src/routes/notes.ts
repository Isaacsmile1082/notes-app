import { createNote, deleteNote, updateNote } from './../controllers/notes';
import { createNoteCheckSchema, deleteNoteCheckSchema, updateNoteCheckSchema } from './../checkSchemas/notes';
import express from 'express';
import Note from '../schemas/Notes';

const router = express.Router();

router.get('/', async (req, res) => {
    const notes = await Note.find({});
    res.json({
        ok: true,
        notes
    });
});

router.post('/', createNoteCheckSchema, createNote);

router.delete('/', deleteNoteCheckSchema, deleteNote);

router.patch('/', updateNoteCheckSchema, updateNote);


export default router;
