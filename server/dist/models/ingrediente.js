"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// src/models/Ingrediente.ts
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../db/connection"));
const medida_1 = __importDefault(require("./medida"));
const receta_1 = __importDefault(require("./receta"));
class Ingrediente extends sequelize_1.Model {
}
Ingrediente.init({
    recetaId: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: receta_1.default,
            key: 'id'
        }
    },
    cantidad: {
        type: sequelize_1.DataTypes.DECIMAL(10, 2),
        allowNull: false
    },
    medidaId: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: medida_1.default,
            key: 'id'
        }
    },
    nombre: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    }
}, {
    sequelize: connection_1.default,
    tableName: 'ingredientes', // Nombre de la tabla en la base de datos
    modelName: 'Ingrediente', // Nombre del modelo
    timestamps: false, // Desactivar los campos de marcas de tiempo
});
exports.default = Ingrediente;
