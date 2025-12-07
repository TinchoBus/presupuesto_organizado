import express from "express";
import {
  crearCategorias,
  obtenerCategorias,
  eliminarCategoria
} from "../controllers/categoriaController.js";

const router = express.Router();


// Crear múltiples categorías
router.post("/multiples", crearCategorias);

// Obtener todas las categorías
router.get("/", obtenerCategorias);

// Eliminar categoría por ID
router.delete("/:id", eliminarCategoria);

export default router;