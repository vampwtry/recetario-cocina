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
  console.log(`Servidor corriendo en el ${PORT}`);
  
  try {
    await sequelize.authenticate();
    console.log('Conexion a la base de datos exitosa.');
  } catch (error) {
    console.error('Error al conectarse a la base de datos ', error);
  }
});
