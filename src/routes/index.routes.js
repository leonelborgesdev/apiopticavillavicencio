import { Router } from "express";
import ClienteRoute from "./cliente.routes.js";
import CitaRoute from "./cita.routes.js";
import RecetaRoute from "./receta.routes.js";
import ProductoRoute from "./productos.routes.js";
import ImageRoute from "./image.routes.js";

const router = Router();

router.use("/cliente", ClienteRoute);
router.use("/cita", CitaRoute);
router.use("/receta", RecetaRoute);
router.use("/producto", ProductoRoute);
router.use("/image", ImageRoute);

export default router;
