import { Router } from "express";
import { createCita, getCitas } from "../controllers/cita.controller.js";

const router = Router();

router.get("/", getCitas);
router.post("/", createCita);
router.put("/:id");
router.delete("/:id");
router.get("/:id");

export default router;
