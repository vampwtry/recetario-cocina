// src/models/receta.ts
import { DataTypes, Model } from 'sequelize';
import sequelize from '../db/connection';
import Usuario from './usuario';

interface RecetaAttributes {
  id?: number;
  visual: boolean;
  nombre: string;
  descripcion: string;
  imagen_url?: string;
  tiempo: string;
  porciones: string;
  usuario_id: number;
}


class Receta extends Model<RecetaAttributes> implements RecetaAttributes {
  public id!: number;
  public visual!: boolean;
  public nombre!: string;
  public descripcion!: string;
  public imagen_url?: string;
  public tiempo!: string;
  public porciones!: string;
  public usuario_id!: number;
}

Receta.init({
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    visual: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true,
    },
    nombre: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    descripcion: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    imagen_url: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
  tiempo: {
    type: DataTypes.STRING(20),
    allowNull: false
  },
  porciones: {
    type: DataTypes.STRING(20),
    allowNull: false
  },
  usuario_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Usuario,
      key: 'id'
    }
  }
}, {
  sequelize,
  tableName: 'recetas', // Nombre de la tabla en la base de datos
    modelName: 'Usuario', // Nombre del modelo
    timestamps: false, // Desactivar los campos de marcas de tiempo
});

export default Receta;
