import express from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (_req, res) => {
  res.send(`
    <h1 style="font-family:sans-serif; color:green">
      ✅ Resume Analyzer API is running!
    </h1>
  `);
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});
