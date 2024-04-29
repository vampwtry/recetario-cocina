"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// src/models/usuario.ts
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../db/connection"));
class Usuario extends sequelize_1.Model {
}
Usuario.init({
    nombre: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    contrasena: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    }
}, {
    sequelize: connection_1.default,
    tableName: 'usuarios', // Nombre de la tabla en la base de datos
    modelName: 'Usuario', // Nombre del modelo
    timestamps: false, // Desactivar los campos de marcas de tiempo
});
exports.default = Usuario;
