"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// src/models/PasoPreparacion.ts
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../db/connection"));
const receta_1 = __importDefault(require("./receta"));
class PasoPreparacion extends sequelize_1.Model {
}
PasoPreparacion.init({
    recetaId: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: receta_1.default,
            key: 'id'
        }
    },
    numero: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false
    },
    descripcion: {
        type: sequelize_1.DataTypes.TEXT,
        allowNull: false
    }
}, {
    sequelize: connection_1.default,
    tableName: 'pasos', // Nombre de la tabla en la base de datos
    modelName: 'PasoPReparacion', // Nombre del modelo
    timestamps: false, // Desactivar los campos de marcas de tiempo
});
exports.default = PasoPreparacion;
