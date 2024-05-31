import { DataTypes, Model } from 'sequelize';
import sequelize from '../db/connection';
import Receta from './receta';
import Medida from './medida';

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
  cantidad: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false,
  },
  medida_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Medida,
      key: 'id',
    },
  },
  ingrediente: {
    type: DataTypes.STRING(255),
    allowNull: false,
  },
}, {
  sequelize,
  tableName: 'ingredientes',
  modelName: 'Ingrediente',
  timestamps: false,
});

Ingrediente.belongsTo(Receta, { foreignKey: 'receta_id' });
Ingrediente.belongsTo(Medida, { foreignKey: 'medida_id' });
Receta.hasMany(Ingrediente, { foreignKey: 'receta_id' });

export default Ingrediente;
