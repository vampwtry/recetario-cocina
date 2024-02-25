"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// src/models/receta.ts
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../db/connection"));
const usuario_1 = __importDefault(require("./usuario"));
class Receta extends sequelize_1.Model {
}
Receta.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true,
    },
    visual: {
        type: sequelize_1.DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true,
    },
    nombre: {
        type: sequelize_1.DataTypes.STRING(255),
        allowNull: false,
    },
    descripcion: {
        type: sequelize_1.DataTypes.TEXT,
        allowNull: true,
    },
    imagen_url: {
        type: sequelize_1.DataTypes.STRING(255),
        allowNull: true,
    },
    tiempo: {
        type: sequelize_1.DataTypes.STRING(20),
        allowNull: false
    },
    porciones: {
        type: sequelize_1.DataTypes.STRING(20),
        allowNull: false
    },
    usuarioId: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: usuario_1.default,
            key: 'id'
        }
    }
}, {
    sequelize: connection_1.default,
    tableName: 'recetas', // Nombre de la tabla en la base de datos
    modelName: 'Usuario', // Nombre del modelo
    timestamps: false, // Desactivar los campos de marcas de tiempo
});
exports.default = Receta;
