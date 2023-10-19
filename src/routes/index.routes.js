import { Router } from "express";
import ClienteRoute from "./cliente.routes.js";

const router = Router();

router.use("/cliente", ClienteRoute);

export default router;
