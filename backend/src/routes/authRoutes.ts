import express from "express";
import type { Request, Response } from "express";
import { registerUser } from "../controllers/authController.ts";

const router = express.Router();

router.post("/register", registerUser);

router.post("/login", async (req: Request, res: Response) => {
  // Handle user login
  res.send("User logged in");
});

export default router;
