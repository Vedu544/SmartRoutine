import { Router } from "express";
const router = Router();

router.get("/health", (req, res) => {
  res.status(200).json({ ok: true, service: "smartRoutine-api", time: new Date().toISOString() });
});

export default router;
