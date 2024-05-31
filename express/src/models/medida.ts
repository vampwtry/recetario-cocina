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
  id: {
    type: DataTypes.INTEGER.UNSIGNED,
    autoIncrement: true,
    primaryKey: true,
  },
  medida: {
    type: DataTypes.STRING(50),
    allowNull: false,
  },
}, {
  sequelize,
  tableName: 'medidas',
  modelName: 'Medida',
  timestamps: false,
});

export default Medida;
