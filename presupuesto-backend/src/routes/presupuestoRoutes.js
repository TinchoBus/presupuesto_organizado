import express from "express";
import {
  crearPresupuesto,
  obtenerPresupuestos,
  obtenerPresupuesto,
  eliminarPresupuesto
} from "../controllers/presupuestoController.js";

const router = express.Router();

// Crear presupuesto
router.post("/", crearPresupuesto);

// Obtener todos los presupuestos
router.get("/", obtenerPresupuestos);

// Obtener presupuesto por ID
router.get("/:id", obtenerPresupuesto);

// Eliminar presupuesto
router.delete("/:id", eliminarPresupuesto);

export default router;
