import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";

export const Receta = sequelize.define("Receta", {
  id: {
    type: DataTypes.STRING,
    primaryKey: true,
  },
  doctor: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  fecha: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  esf_od_lejos: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  cil_od_lejos: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  eje_od_lejos: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  esf_oi_lejos: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  cil_oi_lejos: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  eje_oi_lejos: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  add_cerca: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  esf_od_cerca: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  cil_od_cerca: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  eje_od_cerca: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  esf_oi_cerca: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  cil_oi_cerca: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  eje_oi_cerca: {
    type: DataTypes.STRING,
    allowNull: true,
  },
});

// Receta.belongsTo(Cliente);
