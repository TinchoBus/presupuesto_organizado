import { Categoria } from "../models/Categoria.js";

// Crear múltiples categorías
export const crearCategorias = async (req, res) => {
  try {
    const { categorias } = req.body;

    if (!categorias || !Array.isArray(categorias)) {
      return res.status(400).json({
        message: "El campo 'categorias' debe ser un array."
      });
    }

    const nuevasCategorias = await Categoria.bulkCreate(categorias);

    res.status(201).json({
      message: "Categorías creadas correctamente",
      data: nuevasCategorias
    });
  } catch (error) {
    console.error("Error al crear categorías:", error);
    res.status(500).json({ message: "Error al crear categorías" });
  }
};

// Obtener todas las categorías
export const obtenerCategorias = async (req, res) => {
  try {
    const categorias = await Categoria.findAll();
    res.json(categorias);
  } catch (error) {
    console.error("Error al obtener categorías:", error);
    res.status(500).json({ message: "Error al obtener las categorías" });
  }
};

// Eliminar categoría por ID
export const eliminarCategoria = async (req, res) => {
  try {
    const { id } = req.params;
    const categoria = await Categoria.findByPk(id);

    if (!categoria) {
      return res.status(404).json({ message: "Categoría no encontrada" });
    }

    await categoria.destroy();
    res.json({ message: "Categoría eliminada correctamente" });
  } catch (error) {
    console.error("Error al eliminar la categoría:", error);
    res.status(500).json({ message: "Error al eliminar la categoría" });
  }
};
