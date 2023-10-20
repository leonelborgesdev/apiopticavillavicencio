import { Receta } from "../models/Receta.js";

export const getAllRecetas = async (req, res) => {
  try {
    const recetas = await Receta.findAll();
    return res.status(200).json({ recetas });
  } catch (error) {
    console.log(error);
    return res.status(400).json({ msg: "Error consulte con su administrador" });
  }
};
export const createReceta = async (req, res) => {
  res.send("create receta");
};
