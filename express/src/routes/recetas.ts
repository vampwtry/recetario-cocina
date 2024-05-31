// routes/recetas.ts
import { Router } from 'express';
import  Receta from '../models/receta';
import  Ingrediente from '../models/ingrediente';
import Medida  from '../models/medida';
import Paso  from '../models/paso';

const router = Router();

router.post('/crear', async (req, res) => {
  const { visual, nombre, descripcion, imagen_url, tiempo, porciones, usuario_id, ingredientes, pasos } = req.body;

  try {
    const receta = await Receta.create({ visual, nombre, descripcion, imagen_url, tiempo, porciones, usuario_id });

    if (ingredientes && ingredientes.length > 0) {
      for (const ing of ingredientes) {
        await Ingrediente.create({ receta_id: receta.id, cantidad: ing.cantidad, medida_id: ing.medida_id, ingrediente: ing.ingrediente });
      }
    }

    if (pasos && pasos.length > 0) {
      for (const paso of pasos) {
        await Paso.create({ receta_id: receta.id, numero: paso.numero, descripcion: paso.descripcion });
      }
    }

    res.status(201).json({ message: 'Receta creada con éxito' });
  } catch (error) {
    res.status(500).json({ error: 'Error al crear la receta' });
  }
});

export default router;
