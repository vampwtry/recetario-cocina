import express from 'express';
import {
  obtenerTodasLasRecetas,
  obtenerRecetaPorId,
  crearReceta,
  actualizarReceta,
  eliminarReceta
} from '../controllers/recetasC';



const router = express.Router();

// Crear una nueva receta
router.post('/', crearReceta);

// Obtener todas las recetas
router.get('/', obtenerTodasLasRecetas);

// Obtener una receta por su ID
router.get('/:id', obtenerRecetaPorId);


// Actualizar una receta
router.put('/:id', actualizarReceta);

// Eliminar una receta
router.delete('/:id', eliminarReceta);


export default router;