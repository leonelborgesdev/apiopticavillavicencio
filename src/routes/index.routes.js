import { Router } from "express";
import ClienteRoute from "./cliente.routes.js";
import CitaRoute from "./cita.routes.js";

const router = Router();

router.use("/cliente", ClienteRoute);
router.use("/cita", CitaRoute);

export default router;
