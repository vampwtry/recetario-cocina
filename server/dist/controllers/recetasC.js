"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.eliminarReceta = exports.actualizarReceta = exports.obtenerRecetaPorId = exports.obtenerTodasLasRecetas = exports.crearReceta = void 0;
const receta_1 = __importDefault(require("../models/receta"));
const crearReceta = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { visual, nombre, descripcion, imagen_url, tiempo, porciones, usuarioId } = req.body;
    try {
        const nuevaReceta = yield receta_1.default.create({ visual, nombre, descripcion, imagen_url, tiempo, porciones, usuarioId });
        res.status(201).json(nuevaReceta);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error al crear la receta' });
    }
});
exports.crearReceta = crearReceta;
const obtenerTodasLasRecetas = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const recetas = yield receta_1.default.findAll();
        res.json(recetas);
    }
    catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Error al obtener las recetas' });
    }
});
exports.obtenerTodasLasRecetas = obtenerTodasLasRecetas;
const obtenerRecetaPorId = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const receta = yield receta_1.default.findByPk(id);
        if (!receta) {
            return res.status(404).json({ message: 'Receta no encontrada' });
        }
        res.json(receta);
    }
    catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Error al obtener la receta' });
    }
});
exports.obtenerRecetaPorId = obtenerRecetaPorId;
const actualizarReceta = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { nombre, descripcion, tiempo, porciones } = req.body;
    try {
        const receta = yield receta_1.default.findByPk(id);
        if (!receta) {
            return res.status(404).json({ message: 'Receta no encontrada' });
        }
        receta.nombre = nombre;
        receta.descripcion = descripcion;
        receta.tiempo = tiempo;
        receta.porciones = porciones;
        yield receta.save();
        res.json(receta);
    }
    catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Error al actualizar la receta' });
    }
});
exports.actualizarReceta = actualizarReceta;
const eliminarReceta = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const receta = yield receta_1.default.findByPk(id);
        if (!receta) {
            return res.status(404).json({ message: 'Receta no encontrada' });
        }
        yield receta.destroy();
        res.json({ message: 'Receta eliminada correctamente' });
    }
    catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Error al eliminar la receta' });
    }
});
exports.eliminarReceta = eliminarReceta;
