// src/routes/ingredientes.ts
import express from 'express';
import { crearIngrediente } from '../controllers/ingredientesC';

const router = express.Router();

router.post('/', crearIngrediente);

export default router;
