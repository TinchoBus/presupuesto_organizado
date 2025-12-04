import { Categoria } from "../models/Categoria.js";

export const crearCategoria = async (req, res) => {
  try {
    const { nombre } = req.body;
    const categoria = await Categoria.create({ nombre });
    res.json(categoria);
  } catch (error) {
    res.status(500).json({ error: "Error al crear categoría" });
  }
};

export const obtenerCategorias = async (req, res) => {
  try {
    const categorias = await Categoria.findAll();
    res.json(categorias);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener categorías" });
  }
};
