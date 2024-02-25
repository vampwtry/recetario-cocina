"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// src/routes/medidas.ts
const express_1 = __importDefault(require("express"));
const medidasC_1 = require("../controllers/medidasC");
const router = express_1.default.Router();
router.get('/', medidasC_1.obtenerMedidas);
exports.default = router;
