import express from "express";
import { crearGasto, obtenerGastos } from "../controllers/gastoController.js";

const router = express.Router();

router.post("/", crearGasto);
router.get("/", obtenerGastos);

export default router;
