import { Cliente } from "../models/Cliente.js";

export const getClients = async (req, res) => {
  try {
    const list_clients = await Cliente.findAll();
    return res.status(200).json({ list_clients });
  } catch (error) {
    return res.status(400).json({ msg: "Error consulte con su administrador" });
  }
};

export const createClient = async (req, res) => {
  const { id, nombre, celular } = req.body;
  try {
    const newClient = await Cliente.create({ id, nombre, celular });
    return res.status(200).json({ newClient });
  } catch (error) {
    return res.status(400).json({ msg: "Error Consulte con su administrador" });
  }
};
