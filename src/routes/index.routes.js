import { Router } from "express";
import ClienteRoute from "./cliente.routes.js";
import CitaRoute from "./cita.routes.js";
import RecetaRoute from "./receta.routes.js";

const router = Router();

router.use("/cliente", ClienteRoute);
router.use("/cita", CitaRoute);
router.use("/receta", RecetaRoute);

export default router;
