"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const usuarioC_1 = require("../controllers/usuarioC");
const router = express_1.default.Router();
router.post('/', usuarioC_1.crearUsuario);
exports.default = router;
