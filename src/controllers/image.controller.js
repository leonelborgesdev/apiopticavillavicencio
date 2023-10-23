import { Image } from "../models/Image.js";

export const getAllImages = async (req, res) => {
  try {
    const list_images = await Image.findAll();
    return res.status(200).json({ list_images });
  } catch (error) {
    console.log(error);
    return res.status(400).json({ msg: "Error consulte a su administrador" });
  }
};

export const createImage = (req, res) => {
  try {
    const { id, publicId, secureUrl } = req.body;
    console.log("req.files:", req.files);
    const newImage = Image.create({ id, publicId, secureUrl });
    return res.status(200).json({ newImage });
  } catch (error) {
    console.log(error);
    return res.status(400).json({ msg: "Error consulte a su administrador" });
  }
};
