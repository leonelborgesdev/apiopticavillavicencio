import { json } from "sequelize";
import { Cita } from "../models/Cita.js";

export const getCitas = (req, res) => {
  res.send("getting citas");
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
