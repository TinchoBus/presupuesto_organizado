import { Sequelize } from "sequelize";
import dotenv from "dotenv";

dotenv.config();

export const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASS,
  {
    host: process.env.DB_HOST,
    dialect: process.env.DB_DIALECT,
    logging: false
  }
);

export const conectarDB = async () => {
  try {
    await sequelize.authenticate();
    console.log("Base de datos conectada con éxito.");
  } catch (error) {
    console.error("Error al conectar la base de datos:", error);
  }
};
