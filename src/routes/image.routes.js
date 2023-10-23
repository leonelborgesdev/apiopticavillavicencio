import { Router } from "express";
import { createImage, getAllImages } from "../controllers/image.controller.js";

const router = Router();

router.get("/", getAllImages);
router.post("/", createImage);
router.put("/:id");

export default router;
