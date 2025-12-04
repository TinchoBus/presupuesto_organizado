import app from "./app.js";
import { conectarDB, sequelize } from "./config/database.js";

const PORT = process.env.PORT || 3000;

const start = async () => {
  await conectarDB();
  await sequelize.sync({ alter: true });

  app.listen(PORT, () => {
    console.log(`Servidor escuchando en puerto ${PORT}`);
  });
};

start();
