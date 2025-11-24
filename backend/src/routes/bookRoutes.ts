import express from "express";
import type { Router } from "express";
import protectRoute from "../middleware/auth.middleware.ts";
import { createBook, getBooks } from "../controllers/bookController.ts";

const router: Router = express.Router();

router.post("/", protectRoute, createBook);
router.get("/", protectRoute, getBooks);
// router.get("/user");
// router.delete("/:id");

export default router;
