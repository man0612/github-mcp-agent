import express from "express";
import githubRoutes from "./routes/github.routes";
import dotenv from "dotenv";

dotenv.config();

const app = express();

app.use(express.json());
app.use("/github", githubRoutes);

const PORT = process.env.PORT || 3000;

app.get("/", (_, res) => {
    res.json({
        message: "GitHub MCP Agent Running"
    });
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});