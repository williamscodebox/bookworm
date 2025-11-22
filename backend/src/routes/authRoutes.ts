import express from "express";
import type { Request, Response } from "express";

const router = express.Router();

router.post("/register", (req: Request, res: Response) => {
  // Handle user login
  res.send("User has been registered");
});

router.post("/login", (req: Request, res: Response) => {
  // Handle user login
  res.send("User logged in");
});

export default router;
