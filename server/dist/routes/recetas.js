"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const recetas_1 = require("../controllers/recetas");
const router = (0, express_1.Router)();
router.get('/', recetas_1.getRecetas);
exports.default = router;
