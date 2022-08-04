import { RequestHandler } from 'express';
import Categories from '../schemas/Categories';

export const createCategorie: RequestHandler = async (req, res) => {
    const note = new Categories({
        ...req.body
    });
    try {
        await note.save();
        res.json({
            ok: true,
            note
        });
    } catch (error) {
        console.error(error);
        res.json({
            ok: false,
            error
        });
    }
};

export const deleteCategorie: RequestHandler = async (req, res) => {
    try {
        await Categories.findOneAndDelete({
            _id: req.body._id
        });
        return res.json({
            ok: true
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            ok: false,
            error
        });
    }
};

export const updateCategorie: RequestHandler = async (req, res) => {
    const { _id, ...rest } = req.body;

    try {
        const updatedNote = await Categories.findOneAndUpdate(
            {
                id: _id
            },
            rest,
            {
                returnDocument: 'after'
            }
        );

        return res.json({
            ok: true,
            updatedNote
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            ok: false,
            error
        });
    }
};
