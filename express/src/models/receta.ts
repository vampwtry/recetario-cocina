import { DataTypes, Model } from 'sequelize';
import sequelize from '../db/connection';
import Usuario from './usuario';

interface RecetaAttributes {
  id?: number;
  visual: boolean;
  nombre: string;
  descripcion?: string;
  imagen_url?: string;
  tiempo: string;
  porciones: string;
  usuario_id: number;
}

class Receta extends Model<RecetaAttributes> implements RecetaAttributes {
  public id!: number;
  public visual!: boolean;
  public nombre!: string;
  public descripcion?: string;
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

  tiempo: {
    type: DataTypes.STRING(20),
    allowNull: false,
  },
  porciones: {
    type: DataTypes.STRING(20),
    allowNull: false,
  },
  usuario_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Usuario,
      key: 'id',
    },
  },
}, {
  sequelize,
  tableName: 'recetas',
  modelName: 'Receta',
  timestamps: false,
});

Receta.belongsTo(Usuario, { foreignKey: 'usuario_id' });
Usuario.hasMany(Receta, { foreignKey: 'usuario_id' });

export default Receta;
