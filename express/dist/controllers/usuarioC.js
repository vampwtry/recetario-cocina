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
exports.crearUsuario = void 0;
const usuario_1 = __importDefault(require("../models/usuario"));
const crearUsuario = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { nombre, contrasena } = req.body;
    try {
        const nuevoUsuario = yield usuario_1.default.create({ nombre, contrasena });
        res.status(201).json(nuevoUsuario);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error al crear el usuario' });
    }
});
exports.crearUsuario = crearUsuario;
