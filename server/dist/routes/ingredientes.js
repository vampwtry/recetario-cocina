"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// src/routes/ingredientes.ts
const express_1 = __importDefault(require("express"));
const ingredientesC_1 = require("../controllers/ingredientesC");
const router = express_1.default.Router();
router.post('/ingredientes', ingredientesC_1.crearIngrediente);
exports.default = router;
