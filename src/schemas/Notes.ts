import mongoose from 'mongoose';
import { INotes } from './../types/Notes.d';
import { Schema } from 'mongoose';

const notesSchema = new Schema<INotes>({
    title: String,
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Users'
    },
    description: String,
    date: Date,
    favorite: Boolean,
    image: String
});

export default mongoose.model('Notes', notesSchema);
