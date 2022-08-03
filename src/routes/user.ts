import { Router } from 'express';
import { updateUserCheckSchema } from '../checkSchemas/user';
import { updateUser } from '../controllers/user';
import { verifyToken } from '../middleware/token';
import { validateInput } from '../middleware/validateInput';

const router = Router();

router.use(verifyToken);

router.patch('/', updateUserCheckSchema, validateInput, updateUser);
