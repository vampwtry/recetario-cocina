// src/models/usuario.ts
import { DataTypes, Model } from 'sequelize';
import sequelize from '../db/connection';

interface UsuarioAttributes {
  id?: number;
  nombre: string;
  contrasena: string;
}

class Usuario extends Model<UsuarioAttributes> implements UsuarioAttributes {
  public id!: number;
  public nombre!: string;
  public contrasena!: string;
}

Usuario.init({
  nombre: {
    type: DataTypes.STRING,
    allowNull: false
  },
  contrasena: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  sequelize,
  tableName: 'usuarios', // Nombre de la tabla en la base de datos
    modelName: 'Usuario', // Nombre del modelo
    timestamps: false, // Desactivar los campos de marcas de tiempo
});

export default Usuario;
