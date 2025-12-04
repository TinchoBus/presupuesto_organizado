import { DataTypes } from "sequelize";
import { sequelize } from "../config/database.js";

export const Gasto = sequelize.define("Gasto", {
  monto: {
    type: DataTypes.FLOAT,
    allowNull: false
  },
  mes: {
    type: DataTypes.STRING,
    allowNull: false
  }
});
