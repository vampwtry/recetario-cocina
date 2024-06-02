import { Request, Response } from 'express';
import Receta from '../models/receta';


export const crearReceta = async (req: Request, res: Response) => {
    const { visual, nombre, descripcion, tiempo, porciones, usuario_id } = req.body;
    try {
      const nuevaReceta = await Receta.create({ visual,nombre, descripcion, tiempo, porciones, usuario_id });
      res.status(201).json(nuevaReceta);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error al crear la receta' });
    }
  };



export const obtenerTodasLasRecetas = async (req: Request, res: Response) => {
  try {
    const recetas = await Receta.findAll();
    res.json(recetas);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error al obtener las recetas' });
  }
};

export const obtenerRecetaPorId = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const receta = await Receta.findByPk(id);
    if (!receta) {
      return res.status(404).json({ message: 'Receta no encontrada' });
    }
    res.json(receta);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error al obtener la receta' });
  }
};


export const actualizarReceta = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { nombre, descripcion, tiempo, porciones } = req.body;
  try {
    const receta = await Receta.findByPk(id);
    if (!receta) {
      return res.status(404).json({ message: 'Receta no encontrada' });
    }
    receta.nombre = nombre;
    receta.descripcion = descripcion;
    receta.tiempo = tiempo;
    receta.porciones = porciones;
    await receta.save();
    res.json(receta);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error al actualizar la receta' });
  }
};

export const eliminarReceta = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const receta = await Receta.findByPk(id);
    if (!receta) {
      return res.status(404).json({ message: 'Receta no encontrada' });
    }
    await receta.destroy();
    res.json({ message: 'Receta eliminada correctamente' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error al eliminar la receta' });
  }
};
