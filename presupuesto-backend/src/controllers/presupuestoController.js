import { Presupuesto } from "../models/Presupuesto.js";
import { Gasto } from "../models/Gasto.js";

// Crear un nuevo presupuesto con validaciones estrictas
export const crearPresupuesto = async (req, res) => {
  try {
    const { mes, salario } = req.body;

    // VALIDACIÓN: mes obligatorio y no vacío
    if (!mes || mes.trim() === "") {
      return res.status(400).json({ message: "El campo 'mes' es obligatorio y no puede estar vacío." });
    }

    // VALIDACIÓN: salario obligatorio
    if (salario === undefined || salario === null) {
      return res.status(400).json({ message: "El campo 'salario' es obligatorio." });
    }

    // VALIDACIÓN: salario debe ser número
    if (isNaN(salario)) {
      return res.status(400).json({ message: "El salario debe ser un número válido." });
    }

    // VALIDACIÓN: salario mayor a 0
    if (Number(salario) <= 0) {
      return res.status(400).json({ message: "El salario debe ser mayor a 0." });
    }

    // VALIDACIÓN: salario mínimo 6 cifras (desde $100.000)
    if (Number(salario) < 100000) {
      return res.status(400).json({
        message: "El salario debe ser de al menos 6 cifras (mínimo $100.000 en Argentina)."
      });
    }

    // CREACIÓN DEL PRESUPUESTO
    const presupuesto = await Presupuesto.create({
      mes,
      salario,
      totalGastos: 0,
      saldo: salario
    });

    res.status(201).json(presupuesto);

  } catch (error) {
    console.error("Error en crearPresupuesto:", error);
    res.status(500).json({ message: "Error al crear el presupuesto" });
  }
};

// Obtener todos los presupuestos
export const obtenerPresupuestos = async (req, res) => {
  try {
    const presupuestos = await Presupuesto.findAll({ include: Gasto });
    res.json(presupuestos);
  } catch (error) {
    console.error("Error en obtenerPresupuestos:", error);
    res.status(500).json({ message: "Error al obtener los presupuestos" });
  }
};

// Obtener un presupuesto por ID
export const obtenerPresupuesto = async (req, res) => {
  try {
    const { id } = req.params;

    if (isNaN(id)) {
      return res.status(400).json({ message: "El ID debe ser un número válido." });
    }

    const presupuesto = await Presupuesto.findByPk(id, { include: Gasto });
    if (!presupuesto) {
      return res.status(404).json({ message: "Presupuesto no encontrado" });
    }

    res.json(presupuesto);

  } catch (error) {
    console.error("Error en obtenerPresupuesto:", error);
    res.status(500).json({ message: "Error al obtener el presupuesto" });
  }
};

// Eliminar presupuesto
export const eliminarPresupuesto = async (req, res) => {
  try {
    const { id } = req.params;

    if (isNaN(id)) {
      return res.status(400).json({ message: "El ID debe ser un número válido." });
    }

    const presupuesto = await Presupuesto.findByPk(id);
    if (!presupuesto) {
      return res.status(404).json({ message: "Presupuesto no encontrado" });
    }

    await presupuesto.destroy();
    res.json({ message: "Presupuesto eliminado correctamente" });

  } catch (error) {
    console.error("Error en eliminarPresupuesto:", error);
    res.status(500).json({ message: "Error al eliminar el presupuesto" });
  }
};
