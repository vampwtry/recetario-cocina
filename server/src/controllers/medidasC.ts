// src/controllers/MedidaController.ts
import { Request, Response } from 'express';
import Medida from '../models/medida';

export const obtenerMedidas = async (req: Request, res: Response) => {
  try {
    const medidas = await Medida.findAll();
    res.status(200).json(medidas);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al obtener las medidas' });
  }
};
