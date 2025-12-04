import express from "express";
import cors from "cors";
import gastoRoutes from "./routes/gastoRoutes.js";
import usuarioRoutes from "./routes/usuarioRoutes.js";
import categoriaRoutes from "./routes/categoriaRoutes.js";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/usuarios", usuarioRoutes);
app.use("/categorias", categoriaRoutes);
app.use("/gastos", gastoRoutes);

export default app;
