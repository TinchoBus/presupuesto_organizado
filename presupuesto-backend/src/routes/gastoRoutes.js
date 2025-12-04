import { Router } from "express";
import {
  crearGasto,
  obtenerGastos,
  obtenerGastosPorUsuario,
  obtenerGastosPorMes
} from "../controllers/gastoController.js";

const router = Router();

router.post("/", crearGasto);
router.get("/", obtenerGastos);
router.get("/usuario/:usuarioId", obtenerGastosPorUsuario);
router.get("/mes/:mes", obtenerGastosPorMes);

export default router;
