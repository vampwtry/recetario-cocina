"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// src/routes/pasosPreparacion.ts
const express_1 = __importDefault(require("express"));
const pasosC_1 = require("../controllers/pasosC");
const router = express_1.default.Router();
router.post('/', pasosC_1.crearPasoPreparacion);
exports.default = router;
