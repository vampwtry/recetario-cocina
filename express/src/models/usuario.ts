import { DataTypes, Model } from 'sequelize';
import sequelize from '../db/connection';

interface UsuarioAttributes {
  id?: number;
  nombre: string;
}

class Usuario extends Model<UsuarioAttributes> implements UsuarioAttributes {
  public id!: number;
  public nombre!: string;
}

Usuario.init({
  id: {
    type: DataTypes.INTEGER.UNSIGNED,
    autoIncrement: true,
    primaryKey: true,
  },
  nombre: {
    type: DataTypes.STRING(255),
    allowNull: false,
  }
}, {
  sequelize,
  tableName: 'usuarios',
  modelName: 'Usuario',
  timestamps: false,
});

export default Usuario;
