import { Document } from 'mongoose';
export interface INotes {
    title: string;
    author: string;
    description: string;
    image: string;
    date: Date;
    favorite: boolean;
}

/* eslint-disable */
export type TDocNotes = Document<unknown, any, INotes> &
    INotes & {
        _id: Types.ObjectId;
    };
