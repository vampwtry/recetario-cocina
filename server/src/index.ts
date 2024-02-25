import express from 'express';
import medidasRouter from './routes/medidas';
import usuariosRouter from './routes/usuarios';
import recetasRouter from './routes/recetas';
import ingredientesRouter from './routes/ingredientes';
import pasosPreparacionRouter from './routes/pasos';
import  sequelize  from './db/connection';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use('/medidas', medidasRouter);
app.use('/usuarios', usuariosRouter);
app.use('/recetas', recetasRouter);
app.use('/ingredientes', ingredientesRouter);
app.use('/pasos-preparacion', pasosPreparacionRouter);

app.listen(PORT, async () => {
  console.log(`Server is running on port ${PORT}`);
  
  try {
    await sequelize.authenticate();
    console.log('Database connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
});
