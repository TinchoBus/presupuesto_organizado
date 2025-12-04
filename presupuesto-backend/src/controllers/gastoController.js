import { Gasto } from "../models/Gasto.js";
import { Usuario } from "../models/usuario.js";
import { Categoria } from "../models/Categoria.js";

export const crearGasto = async (req, res) => {
  try {
    const { monto, mes, usuarioId, categoriaId } = req.body;

    const gasto = await Gasto.create({
      monto,
      mes,
      UsuarioId: usuarioId,
      CategoriaId: categoriaId
    });

    res.json(gasto);
  } catch (error) {
    res.status(500).json({ error: "Error al crear gasto" });
  }
};

export const obtenerGastos = async (req, res) => {
  try {
    const gastos = await Gasto.findAll({
      include: [Usuario, Categoria]
    });

    res.json(gastos);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener gastos" });
  }
};

export const obtenerGastosPorUsuario = async (req, res) => {
  try {
    const { usuarioId } = req.params;

    const gastos = await Gasto.findAll({
      where: { UsuarioId: usuarioId },
      include: [Categoria]
    });

    res.json(gastos);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener gastos del usuario" });
  }
};

export const obtenerGastosPorMes = async (req, res) => {
  try {
    const { mes } = req.params;

    const gastos = await Gasto.findAll({
      where: { mes },
      include: [Usuario, Categoria]
    });

    res.json(gastos);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener gastos por mes" });
  }
};
