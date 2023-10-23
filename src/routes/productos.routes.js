import { Router } from "express";
import {
  createProduct,
  getAllProducts,
} from "../controllers/producto.controller.js";

const router = Router();

router.get("/", getAllProducts);
router.post("/", createProduct);
router.put("/:id");
router.delete("/:id");
router.get("/:id");

export default router;
