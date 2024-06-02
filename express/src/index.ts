import express, { Request, Response } from 'express';
import medidasRouter from './routes/medidas';
import usuariosRouter from './routes/usuarios';
import recetasRouter from './routes/recetas';
import ingredientesRouter from './routes/ingredientes';
import pasosPreparacionRouter from './routes/pasos';
import sequelize from './db/connection';
import cors from 'cors';

const app = express();
const PORT = process.env.PORT || 3000;

// Configura CORS
const corsOptions: cors.CorsOptions = {
  origin: 'http://localhost:4200',
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  optionsSuccessStatus: 200
};

app.use(cors(corsOptions)); // Aplica el middleware CORS globalmente

// Otros middlewares
app.use(express.json());

// Define tus rutas
app.use('/medidas', medidasRouter);
app.use('/usuarios', usuariosRouter);
app.use('/recetas', recetasRouter);
app.use('/ingredientes', ingredientesRouter);
app.use('/pasos-preparacion', pasosPreparacionRouter);

// Maneja las solicitudes preflight (opcional, pero a veces necesario)
app.options('*', cors(corsOptions));

app.get('/recetas', (req: Request, res: Response) => {
  res.json({ message: 'Esta es la respuesta de /recetas' });
});

// Inicia el servidor
app.listen(PORT, async () => {
  console.log(`Servidor corriendo en el ${PORT}`);

  try {
    await sequelize.authenticate();
    console.log('Conexión a la base de datos exitosa.');
  } catch (error) {
    console.error('Error al conectarse a la base de datos', error);
  }
});



/*
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use('/medidas', medidasRouter);
app.use('/usuarios', usuariosRouter);
app.use('/recetas', recetasRouter);
app.use('/ingredientes', ingredientesRouter);
app.use('/pasos-preparacion', pasosPreparacionRouter);


app.use(cors())

app.listen(PORT, async () => {
  console.log(`Servidor corriendo en el ${PORT}`);

  try {
    await sequelize.authenticate();
    console.log('Conexion a la base de datos exitosa.');
  } catch (error) {
    console.error('Error al conectarse a la base de datos', error);
  }
}); */
