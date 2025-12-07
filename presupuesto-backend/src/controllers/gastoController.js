// gastoController.js
import { Gasto } from "../models/Gasto.js";
import { Usuario } from "../models/usuario.js";
import { Categoria } from "../models/Categoria.js";
import { Presupuesto } from "../models/Presupuesto.js";

// Crear un gasto
export const crearGasto = async (req, res) => {
  try {
    const { descripcion, monto, categoriaId, usuarioId, presupuestoId } = req.body;

    // Verificar que existan las entidades relacionadas
    const usuario = await Usuario.findByPk(usuarioId);
    const categoria = await Categoria.findByPk(categoriaId);
    const presupuesto = await Presupuesto.findByPk(presupuestoId);

    if (!usuario) return res.status(404).json({ message: "Usuario no encontrado" });
    if (!categoria) return res.status(404).json({ message: "Categoría no encontrada" });
    if (!presupuesto) return res.status(404).json({ message: "Presupuesto no encontrado" });

    const gasto = await Gasto.create({
      descripcion,
      monto,
      UsuarioId: usuarioId,
      CategoriaId: categoriaId,
      PresupuestoId: presupuestoId
    });

    // Actualizar totalGastos y saldo
    presupuesto.totalGastos += monto;
    presupuesto.saldo = presupuesto.salario - presupuesto.totalGastos;
    await presupuesto.save();

    res.status(201).json(gasto);
  } catch (error) {
    console.error("Error al crear gasto:", error);
    res.status(500).json({ message: "Error al crear gasto" });
  }
};

// Obtener todos los gastos
export const obtenerGastos = async (req, res) => {
  try {
    const gastos = await Gasto.findAll({
      include: [Usuario, Categoria, Presupuesto]
    });
    res.json(gastos);
  } catch (error) {
    console.error("Error al obtener gastos:", error);
    res.status(500).json({ message: "Error al obtener gastos" });
  }
};
