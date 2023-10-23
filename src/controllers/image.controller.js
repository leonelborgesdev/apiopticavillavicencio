import { Image } from "../models/Image.js";
import { uploadImage } from "../utils/cloudinary.js";

export const getAllImages = async (req, res) => {
  try {
    const list_images = await Image.findAll();
    return res.status(200).json({ list_images });
  } catch (error) {
    console.log(error);
    return res.status(400).json({ msg: "Error consulte a su administrador" });
  }
};

export const createImage = async (req, res) => {
  try {
    const { id } = req.body;

    if (req.files?.image) {
      const result = await uploadImage(req.files.image.tempFilePath);
      const { public_id, secure_url } = result;
      console.log(result);
      console.log(public_id, secure_url);
      const newImage = await Image.create({ id, public_id, secure_url });
      return res.status(200).json({ newImage });
    }
    return res.status(404).json({ msg: "Error consulte a su administrador" });
  } catch (error) {
    console.log(error);
    return res.status(400).json({ msg: "Error consulte a su administrador" });
  }
};
