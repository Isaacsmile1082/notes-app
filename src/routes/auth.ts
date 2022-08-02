import express from 'express';
import { getEmailAndPasswordCheckSchema } from '../checkSchemas/auth';
import { createUserCheckSchema } from '../checkSchemas/user';
import { refreshToken, signIn, signUp } from '../controllers/auth';
import { validateInput } from '../middleware/validateInput';

const router = express.Router();

router.post('/signup', createUserCheckSchema, validateInput, signUp);

router.post('/signin', getEmailAndPasswordCheckSchema, validateInput, signIn);

router.get('/refreshToken', refreshToken);

export default router;
