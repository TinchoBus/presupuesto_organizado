import { Usuario } from "./usuario.js";
import { Categoria } from "./Categoria.js";
import { Gasto } from "./Gasto.js";
import { Presupuesto } from "./Presupuesto.js";

// Usuario - Gasto
Usuario.hasMany(Gasto);
Gasto.belongsTo(Usuario);

// Categoria - Gasto
Categoria.hasMany(Gasto);
Gasto.belongsTo(Categoria);

// Presupuesto - Gasto
Presupuesto.hasMany(Gasto);
Gasto.belongsTo(Presupuesto);

export { Usuario, Categoria, Gasto, Presupuesto };
