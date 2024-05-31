import { DataTypes, Model } from 'sequelize';
import sequelize from '../db/connection';
import Receta from './receta';

interface PasoAttributes {
  id?: number;
  receta_id: number;
  numero: number;
  descripcion: string;
}

class Paso extends Model<PasoAttributes> implements PasoAttributes {
  public id!: number;
  public receta_id!: number;
  public numero!: number;
  public descripcion!: string;
}

Paso.init({
  id: {
    type: DataTypes.INTEGER.UNSIGNED,
    autoIncrement: true,
    primaryKey: true,
  },
  receta_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Receta,
      key: 'id',
    },
  },
  numero: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  descripcion: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
}, {
  sequelize,
  tableName: 'pasos',
  modelName: 'Paso',
  timestamps: false,
});

Paso.belongsTo(Receta, { foreignKey: 'receta_id' });
Receta.hasMany(Paso, { foreignKey: 'receta_id' });

export default Paso;
