import { Cliente } from "../models/Cliente.js";
import { Receta } from "../models/Receta.js";

export const getAllRecetas = async (req, res) => {
  try {
    const recetas = await Receta.findAll({ include: Cliente });
    return res.status(200).json({ recetas });
  } catch (error) {
    console.log(error);
    return res.status(400).json({ msg: "Error consulte con su administrador" });
  }
};
export const createReceta = async (req, res) => {
  const {
    id,
    doctor,
    fecha,
    ClienteId,
    esf_od_lejos,
    cil_od_lejos,
    eje_od_lejos,
    esf_oi_lejos,
    cil_oi_lejos,
    eje_oi_lejos,
    add_cerca,
    esf_od_cerca,
    cil_od_cerca,
    eje_od_cerca,
    esf_oi_cerca,
    cil_oi_cerca,
    eje_oi_cerca,
  } = req.body;
  try {
    const newRecipe = await Receta.create({
      id,
      doctor,
      fecha,
      ClienteId,
      esf_od_lejos,
      cil_od_lejos,
      eje_od_lejos,
      esf_oi_lejos,
      cil_oi_lejos,
      eje_oi_lejos,
      add_cerca,
      esf_od_cerca,
      cil_od_cerca,
      eje_od_cerca,
      esf_oi_cerca,
      cil_oi_cerca,
      eje_oi_cerca,
    });
    return res.status(200).json({ newRecipe });
  } catch (error) {
    console.log(error);
    return res.status(400).json({ msg: "Error consulte con su administrador" });
  }
};
