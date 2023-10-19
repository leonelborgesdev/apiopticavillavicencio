import { Cliente } from "../models/Cliente.js";

export const getClients = (req, res) => {
  res.send("getting clients");
};

export const createClient = async (req, res) => {
  const { id, nombre, celular } = req.body;
  try {
    const newClient = await Cliente.create({ id, nombre, celular });
    return res.status(200).json({ newClient });
  } catch (error) {
    return res.status(400).json({ msg: "Consulte con su administrador" });
  }
};
