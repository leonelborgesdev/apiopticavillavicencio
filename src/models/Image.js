import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";

export const Image = sequelize.define("Image", {
  id: {
    type: DataTypes.STRING,
    primaryKey: true,
  },
  publicId: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  secureUrl: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});
