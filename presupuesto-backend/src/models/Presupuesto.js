// src/models/Presupuesto.js
import { DataTypes } from "sequelize";
import { sequelize } from "../config/database.js";

export const Presupuesto = sequelize.define("Presupuesto", {
  salario: {
    type: DataTypes.FLOAT,
    allowNull: false
  },
  totalGastos: {
    type: DataTypes.FLOAT,
    defaultValue: 0
  },
  saldo: {
    type: DataTypes.FLOAT,
    defaultValue: 0
  },
  mes: {
    type: DataTypes.STRING,
    allowNull: false
  }
});
