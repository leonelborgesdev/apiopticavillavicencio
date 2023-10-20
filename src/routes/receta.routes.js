import { Router } from "express";
import {
  createReceta,
  getAllRecetas,
} from "../controllers/receta.controller.js";

const router = Router();

router.get("/", getAllRecetas);
router.post("/", createReceta);
router.put("/:id");
router.delete("/:id");
router.get("/:id");

export default router;
