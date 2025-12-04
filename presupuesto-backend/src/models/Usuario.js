import { DataTypes } from "sequelize";
import { sequelize } from "../config/database.js";

export const Usuario = sequelize.define("Usuario", {
  nombre: {
    type: DataTypes.STRING,
    allowNull: false
  },
  salario: {
    type: DataTypes.FLOAT,
    allowNull: false
  }
});
