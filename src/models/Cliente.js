import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";
import { Receta } from "./Receta.js";

export const Cliente = sequelize.define("Cliente", {
  id: {
    type: DataTypes.STRING,
    primaryKey: true,
  },
  nombre: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  celular: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

Cliente.hasMany(Receta);
Receta.belongsTo(Cliente);
