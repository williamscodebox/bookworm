import express from "express";
import type { Request, Response } from "express"; // 👈 use `type` keyword
import "dotenv/config";
import authRoutes from "./routes/authRoutes.ts";
import { connectDB } from "./lib/db.ts";

const app = express();
const PORT = process.env.PORT || 4000;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/auth", authRoutes);

// 👇 Define a root route
app.get("/", (req: Request, res: Response) => {
  res.send("Welcome to Bookworm Backend!");
});

app.listen(PORT, () => {
  console.log("Server is running on port " + PORT);
  console.log(`Server is running on port ${PORT}`);
  connectDB();
});
