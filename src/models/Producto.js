import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";
import { Image } from "./Image.js";

export const Producto = sequelize.define("Producto", {
  id: {
    type: DataTypes.STRING,
    primaryKey: true,
  },
  descripcion: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  stock: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  precio: {
    type: DataTypes.DECIMAL,
    allowNull: false,
  },
  //   image: {
  //     public_id: {
  //       type: DataTypes.STRING,
  //     },
  //     // secure_ufl: DataTypes.STRING,
  //   },
});

Image.hasOne(Producto);
Producto.belongsTo(Image);
