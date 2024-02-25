// src/controllers/UsuarioC.ts
import { Request, Response } from 'express';
import Usuario from '../models/usuario';

export const crearUsuario = async (req: Request, res: Response) => {
  const { nombre, contrasena } = req.body;
  try {
    const nuevoUsuario = await Usuario.create({ nombre, contrasena });
    res.status(201).json(nuevoUsuario);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al crear el usuario' });
  }
};
