import mongoose from 'mongoose';
import { INotes } from './../types/Notes.d';
import { Schema } from 'mongoose';

const notesSchema = new Schema<INotes>({
    title: String,
    author: String,
    description: String,
    date: Date,
    favorite: Boolean,
    image: String
}, {
    methods: {
        findByAuthor(authorArg) {
            return mongoose.model('Notes').find({ author: this.author }, authorArg);
        }
    }
});

export default mongoose.model('Notes', notesSchema);