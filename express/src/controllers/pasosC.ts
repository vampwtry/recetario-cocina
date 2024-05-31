// src/controllers/PasoPreparacionController.ts
import { Request, Response } from 'express';
import  PasoPreparacion  from '../models/paso';

export const crearPasoPreparacion = async (req: Request, res: Response) => {
  const { receta_id, numero, descripcion } = req.body;
  try {
    const nuevoPasoPreparacion = await PasoPreparacion.create({ receta_id, numero, descripcion });
    res.status(201).json(nuevoPasoPreparacion);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al crear el paso de preparación' });
  }
};
