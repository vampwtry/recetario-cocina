import {Router} from 'express';
import { getRecetas } from '../controllers/recetas';

const router = Router();

router.get('/', getRecetas)

export default router;
