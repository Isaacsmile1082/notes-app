import {
    categoryCreateCheckSchema,
    categoryDeleteCheckSchema,
    categoryUpdateCheckSchema
} from './../checkSchemas/category';
import express from 'express';
import { verifyToken } from '../middleware/token';
import { validateInput } from '../middleware/validateInput';
import {
    createCategorie,
    deleteCategorie,
    updateCategorie
} from '../controllers/categorie';
import Categories from '../schemas/Categories';

const router = express.Router();

router.use(verifyToken);

router.get('/', async (req, res) => {
    const categories = await Categories.find({});
    res.json({
        ok: true,
        categories
    });
});

router.post('/', categoryCreateCheckSchema, validateInput, createCategorie);

router.delete('/', categoryDeleteCheckSchema, validateInput, deleteCategorie);

router.patch('/', categoryUpdateCheckSchema, validateInput, updateCategorie);

export default router;
