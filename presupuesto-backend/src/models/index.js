import { Usuario } from "./usuario.js";
import { Categoria } from "./Categoria.js";
import { Gasto } from "./Gasto.js";

// Relación -> Usuario tiene muchos Gastos
Usuario.hasMany(Gasto);
Gasto.belongsTo(Usuario);

// Relación -> Categoria tiene muchos Gastos
Categoria.hasMany(Gasto);
Gasto.belongsTo(Categoria);

export { Usuario, Categoria, Gasto };
