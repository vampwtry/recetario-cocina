// src/routes/pasosPreparacion.ts
import express from 'express';
import { crearPasoPreparacion } from '../controllers/pasosC';

const router = express.Router();

router.post('/', crearPasoPreparacion);

export default router;
