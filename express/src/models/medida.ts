// src/models/Medida.ts
import { DataTypes, Model } from 'sequelize';
import sequelize from '../db/connection';

interface MedidaAttributes {
  id?: number;
  medida: string;
}

class Medida extends Model<MedidaAttributes> implements MedidaAttributes {
  public id!: number;
  public medida!: string;
}

Medida.init({
  medida: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  sequelize,
  tableName: 'modelos', // Nombre de la tabla en la base de datos
    modelName: 'Medida', // Nombre del modelo
    timestamps: false, // Desactivar los campos de marcas de tiempo
});

export default Medida;
