// src/models/Ingrediente.ts
import { DataTypes, Model } from 'sequelize';
import sequelize from '../db/connection';
import Medida from './medida';
import Receta from './receta';

interface IngredienteAttributes {
  id?: number;
  receta_id: number;
  cantidad: number;
  medida_id: number;
  ingrediente: string;
}

class Ingrediente extends Model<IngredienteAttributes> implements IngredienteAttributes {
  public id!: number;
  public receta_id!: number;
  public cantidad!: number;
  public medida_id!: number;
  public ingrediente!: string;
}

Ingrediente.init({
  receta_id: {
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
  medida_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Medida,
      key: 'id'
    }
  },
  ingrediente: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  sequelize,
  tableName: 'ingredientes', // nombre de la tabla en la base de datos
    modelName: 'Ingrediente', // nombre del modelo
    timestamps: false, // Desactivar los campos de marcas de tiempo
});

export default Ingrediente;
