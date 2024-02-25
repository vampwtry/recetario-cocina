// src/controllers/IngredienteController.ts
import { Request, Response } from 'express';
import Ingrediente  from '../models/ingrediente';

export const crearIngrediente = async (req: Request, res: Response) => {
  const { recetaId, cantidad, medidaId, nombre } = req.body;
  try {
    const nuevoIngrediente = await Ingrediente.create({ recetaId, cantidad, medidaId, nombre });
    res.status(201).json(nuevoIngrediente);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al crear el ingrediente' });
  }
};
