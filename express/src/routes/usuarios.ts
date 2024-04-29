
import express from 'express';
import { crearUsuario } from '../controllers/usuarioC';

const router = express.Router();

router.post('/', crearUsuario);

export default router;

