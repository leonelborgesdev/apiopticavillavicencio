import { Cita } from "../models/Cita.js";
import { Cliente } from "../models/Cliente.js";

export const getCitas = async (req, res) => {
  try {
    const listaCitas = await Cita.findAll({ include: Cliente });
    return res.status(200).json({ listaCitas });
  } catch (error) {
    return res.status(400).json({ msg: "Error Consulte con su administrador" });
  }
};

export const createCita = async (req, res) => {
  try {
    const { id, fecha, hora, ClienteId } = req.body;
    const newAppointment = await Cita.create({ id, fecha, hora, ClienteId });
    return res.status(200).json({ newAppointment });
  } catch (error) {
    return res.status(400).json({ msg: "Error Consulte con su administrador" });
  }
};
