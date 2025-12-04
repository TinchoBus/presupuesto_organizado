import { Router } from "express";
import {
  crearUsuario,
  obtenerUsuarios,
  obtenerUsuario,
  eliminarUsuario
} from "../controllers/UsuarioController.js";

const router = Router();

router.post("/", crearUsuario);
router.get("/", obtenerUsuarios);
router.get("/:id", obtenerUsuario);
router.delete("/:id", eliminarUsuario);

export default router;
