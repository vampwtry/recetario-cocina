// src/models/PasoPreparacion.ts
import { DataTypes, Model } from 'sequelize';
import sequelize from '../db/connection';
import Receta from './receta';

interface PasoPreparacionAttributes {
  id?: number;
  receta_id: number;
  numero: number;
  descripcion: string;
}

class PasoPreparacion extends Model<PasoPreparacionAttributes> implements PasoPreparacionAttributes {
  public id!: number;
  public receta_id!: number;
  public numero!: number;
  public descripcion!: string;
}

PasoPreparacion.init({
  receta_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Receta,
      key: 'id'
    }
  },
  numero: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  descripcion: {
    type: DataTypes.TEXT,
    allowNull: false
  }
}, {
  sequelize,
  tableName: 'pasos', // Nombre de la tabla en la base de datos
  modelName: 'PasoPReparacion', // Nombre del modelo
  timestamps: false, // Desactivar los campos de marcas de tiempo
});

export default PasoPreparacion;
