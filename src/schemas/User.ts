import mongoose, { Document } from 'mongoose';
import { Schema } from 'mongoose';

export interface IUser extends Document {
    name: string;
    lastName: string;
    email: string;
    password: string;
    phoneNumber: string;
}

const userSchema = new Schema<IUser>({
    name: String,
    lastName: String,
    phoneNumber: String,
    email: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true
    }
});

export default mongoose.model('Users', userSchema);
