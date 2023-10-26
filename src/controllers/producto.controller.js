import { Op } from "sequelize";
import { Image } from "../models/Image.js";
import { Producto } from "../models/Producto.js";

export const getAllProducts = async (req, res) => {
  let { descripcion } = req.query;
  try {
    console.log(descripcion);
    if (descripcion) {
      const productosbd = await Producto.findAll({
        include: Image,
        where: { descripcion: { [Op.iLike]: `%${descripcion}%` } },
      });
      return res.status(201).json(productosbd);
    }
    const list_products = await Producto.findAll({ include: Image });
    return res.status(200).json({ list_products });
  } catch (error) {
    console.log(error);
    return res.status(400).json({ msg: "Error consulte a su administrador" });
  }
};

export const createProduct = async (req, res) => {
  try {
    const { id, descripcion, stock, precio, ImageId } = req.body;
    const newProduct = await Producto.create({
      id,
      descripcion,
      stock,
      precio,
      ImageId,
    });
    return res.status(200).json(newProduct);
  } catch (error) {
    console.log(error);
    return res.status(400).json({ msg });
  }
};
