import { Sequelize } from 'sequelize';

const sequelize = new Sequelize('recetario-cocina', 'root', '', {
  host: 'localhost',
  dialect: 'mysql' 
});

export default sequelize;
