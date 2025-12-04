import { Usuario } from "../models/usuario.js";

export const crearUsuario = async (req, res) => {
  try {
    const { nombre, salario } = req.body;
    const usuario = await Usuario.create({ nombre, salario });
    res.json(usuario);
  } catch (error) {
    res.status(500).json({ error: "Error al crear usuario" });
  }
};

export const obtenerUsuarios = async (req, res) => {
  try {
    const usuarios = await Usuario.findAll();
    res.json(usuarios);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener usuarios" });
  }
};

export const obtenerUsuario = async (req, res) => {
  try {
    const usuario = await Usuario.findByPk(req.params.id);
    if (!usuario) return res.status(404).json({ error: "Usuario no encontrado" });
    res.json(usuario);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener usuario" });
  }
};

export const eliminarUsuario = async (req, res) => {
  try {
    const usuario = await Usuario.findByPk(req.params.id);
    if (!usuario) return res.status(404).json({ error: "Usuario no encontrado" });

    await usuario.destroy();
    res.json({ mensaje: "Usuario eliminado" });
  } catch (error) {
    res.status(500).json({ error: "Error al eliminar usuario" });
  }
};
