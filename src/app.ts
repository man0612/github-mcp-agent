import express from "express";
import dotenv from "dotenv";
import { github } from "./config/github";

dotenv.config();

const app = express();

app.get("/", async (_, res) => {
  try {
    const user = await github.users.getAuthenticated();

    res.json({
      message: "GitHub Connected!",
      username: user.data.login,
      name: user.data.name,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "GitHub Authentication Failed",
    });
  }
});

app.listen(3000, () => {
  console.log("Server running...");
});