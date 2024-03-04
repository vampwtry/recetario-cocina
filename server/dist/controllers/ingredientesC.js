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
exports.crearIngrediente = void 0;
const ingrediente_1 = __importDefault(require("../models/ingrediente"));
const crearIngrediente = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { receta_id, cantidad, medida_id, ingrediente } = req.body;
    try {
        const nuevoIngrediente = yield ingrediente_1.default.create({ receta_id, cantidad, medida_id, ingrediente });
        res.status(201).json(nuevoIngrediente);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error al crear el ingrediente' });
    }
});
exports.crearIngrediente = crearIngrediente;
