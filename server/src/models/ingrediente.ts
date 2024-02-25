// src/models/Ingrediente.ts
import { DataTypes, Model } from 'sequelize';
import sequelize from '../db/connection';
import Medida from './medida';
import Receta from './receta';

interface IngredienteAttributes {
  id?: number;
  recetaId: number;
  cantidad: number;
  medidaId: number;
  nombre: string;
}

class Ingrediente extends Model<IngredienteAttributes> implements IngredienteAttributes {
  public id!: number;
  public recetaId!: number;
  public cantidad!: number;
  public medidaId!: number;
  public nombre!: string;
}

Ingrediente.init({
  recetaId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Receta,
      key: 'id'
    }
  },
  cantidad: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false
  },
  medidaId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Medida,
      key: 'id'
    }
  },
  nombre: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  sequelize,
  tableName: 'ingredientes', // Nombre de la tabla en la base de datos
    modelName: 'Ingrediente', // Nombre del modelo
    timestamps: false, // Desactivar los campos de marcas de tiempo
});

export default Ingrediente;
