import { Router } from "express";
import { getClients, createClient } from "../controllers/cliente.controller.js";
const router = Router();

router.get("/", getClients);
router.post("/", createClient);
router.put("/:id");
router.delete("/:id");
router.get("/:id");

export default router;
