import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";
import { Cliente } from "./Cliente.js";

export const Cita = sequelize.define("Cita", {
  id: {
    type: DataTypes.STRING,
    primaryKey: true,
  },
  fecha: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  hora: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

//Asociacion uno a uno
Cliente.hasOne(Cita);
Cita.belongsTo(Cliente);
