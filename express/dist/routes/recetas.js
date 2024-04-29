"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const recetasC_1 = require("../controllers/recetasC");
const router = express_1.default.Router();
// Crear una nueva receta
router.post('/', recetasC_1.crearReceta);
// Obtener todas las recetas
router.get('/', recetasC_1.obtenerTodasLasRecetas);
// Obtener una receta por su ID
router.get('/:id', recetasC_1.obtenerRecetaPorId);
// Actualizar una receta
router.put('/:id', recetasC_1.actualizarReceta);
// Eliminar una receta
router.delete('/:id', recetasC_1.eliminarReceta);
exports.default = router;
