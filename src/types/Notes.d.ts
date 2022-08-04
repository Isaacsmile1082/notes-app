import { Document } from 'mongoose';
export interface INotes {
    title: string;
    author: mongoose.Schema.Types.ObjectId;
    description: string;
    image: string;
    date: Date;
    favorite: boolean;
    categories: [string];
}

/* eslint-disable */
export type TDocNotes = Document<unknown, any, INotes> &
    INotes & {
        _id: Types.ObjectId;
    };
