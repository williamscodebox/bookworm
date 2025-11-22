import express from "express";
import type { Request, Response } from "express"; // 👈 use `type` keyword
import "dotenv/config";

const app = express();
const PORT = process.env.PORT;

// 👇 Define a root route
app.get("/", (req: Request, res: Response) => {
  res.send("Welcome to Bookworm Backend!");
});

app.listen(PORT, () => {
  console.log("Server is running on port " + PORT);
});
