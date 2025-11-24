import express from "express";
import protectRoute from "../middleware/auth.middleware";
import { createBook, getBooks } from "../controllers/bookController";

const router = express.Router();

router.post("/", protectRoute, createBook);
router.get("/", protectRoute, getBooks);
router.get("/user");
router.delete("/:id");

export default router;
