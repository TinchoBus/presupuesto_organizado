import { DataTypes } from "sequelize";
import { sequelize } from "../config/database.js";
import { Presupuesto } from "./Presupuesto.js";

export const Gasto = sequelize.define("Gasto", {
  descripcion: { type: DataTypes.STRING, allowNull: false },
  monto: { type: DataTypes.FLOAT, allowNull: false }
});

// RELACIÓN
Presupuesto.hasMany(Gasto, { foreignKey: "PresupuestoId" });
Gasto.belongsTo(Presupuesto, { foreignKey: "PresupuestoId" });

