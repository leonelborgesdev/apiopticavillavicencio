import express from "express";
import router from "./routes/index.routes.js";
import morgan from "morgan";
import cors from "cors";

const app = express();

//Middelwares
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

app.use(router);

export default app;
