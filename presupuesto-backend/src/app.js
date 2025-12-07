import express from "express";
import cors from "cors";

import gastoRoutes from "./routes/gastoRoutes.js";
import usuarioRoutes from "./routes/usuarioRoutes.js";
import categoriaRoutes from "./routes/categoriaRoutes.js";
import presupuestoRoutes from "./routes/presupuestoRoutes.js";

const app = express();

app.use(cors());
app.use(express.json());

// Rutas con prefijo /api
app.use("/api/gastos", gastoRoutes);
app.use("/api/usuarios", usuarioRoutes);
app.use("/api/categorias", categoriaRoutes);
app.use("/api/presupuestos", presupuestoRoutes);

export default app;
