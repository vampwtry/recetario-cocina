// src/controllers/PasoPreparacionController.ts
import { Request, Response } from 'express';
import  PasoPreparacion  from '../models/pasos';

export const crearPasoPreparacion = async (req: Request, res: Response) => {
  const { recetaId, numero, descripcion } = req.body;
  try {
    const nuevoPasoPreparacion = await PasoPreparacion.create({ recetaId, numero, descripcion });
    res.status(201).json(nuevoPasoPreparacion);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al crear el paso de preparación' });
  }
};
