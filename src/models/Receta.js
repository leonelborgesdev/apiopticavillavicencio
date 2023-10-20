import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";

export const Receta = sequelize("Receta", {
  id: {
    type: DataTypes.STRING,
    primarykey: true,
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
    allowNull: false,
  },
  cil_od_lejos: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  eje_od_lejos: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  esf_oi_lejos: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  cil_oi_lejos: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  eje_oi_lejos: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  add_cerca: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  esf_od_cerca: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  cil_od_cerca: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  eje_od_cerca: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  esf_oi_cerca: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  cil_oi_cerca: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  eje_oi_cerca: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});
