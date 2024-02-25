// src/routes/medidas.ts
import express from 'express';
import { obtenerMedidas } from '../controllers/medidasC';

const router = express.Router();

router.get('/', obtenerMedidas);


export default router;
