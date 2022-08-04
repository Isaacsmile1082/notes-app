import mongoose from 'mongoose';
import { Schema } from 'mongoose';

interface ICategory extends mongoose.Document {
    name: string;
}

const categoriesSchema = new Schema<ICategory>({
    name: {
        type: String,
        required: true,
        unique: true
    }
});

export default mongoose.model('Categories', categoriesSchema);
