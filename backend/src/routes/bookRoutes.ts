import express from "express";

const router = express.Router();

router.post("/");
router.get("/");
router.get("/user");
router.delete("/:id");

export default router;
