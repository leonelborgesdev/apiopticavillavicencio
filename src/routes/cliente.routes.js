import { Router } from "express";
const router = Router();

router.get("/client");
router.post("/clients");
router.put("/clients");
router.delete("/clients");
router.get("/clients/:id");

export default router;
