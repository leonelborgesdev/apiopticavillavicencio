import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";

export const Image = sequelize.define("Image", {
  id: {
    type: DataTypes.STRING,
    primaryKey: true,
  },
  public_id: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  secure_url: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});
