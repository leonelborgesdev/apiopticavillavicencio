import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";

export const Producto = sequelize.define("define", {
  id: {
    type: DataTypes.STRING,
    primaryKey: true,
  },
  descripcion: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  stock: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  precio: {
    type: DataTypes.NUMBER,
    allowNull: false,
  },
  image: {
    public_id: DataTypes.STRING,
    secure_ufl: DataTypes.STRING,
  },
});
