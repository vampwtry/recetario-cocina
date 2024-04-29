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
exports.crearPasoPreparacion = void 0;
const pasos_1 = __importDefault(require("../models/pasos"));
const crearPasoPreparacion = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { receta_id, numero, descripcion } = req.body;
    try {
        const nuevoPasoPreparacion = yield pasos_1.default.create({ receta_id, numero, descripcion });
        res.status(201).json(nuevoPasoPreparacion);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error al crear el paso de preparación' });
    }
});
exports.crearPasoPreparacion = crearPasoPreparacion;
