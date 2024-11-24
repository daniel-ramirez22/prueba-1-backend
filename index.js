import express from "express";
import databaseConnection from "./db/config.js";
import apiRouter from "./routes/api.router.js";
const app = express();
import dotenv from "dotenv";

dotenv.config();
const PORT = process.env.PORT || 5020; // siendo tomada desde el .env

databaseConnection();

app.use(apiRouter);

app.listen(PORT, () => {
  console.log(`Servidor corriendo en el http://localhost:${PORT}`);
});
