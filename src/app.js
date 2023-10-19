import express from "express";
import router from "./routes/index.routes.js";

const app = express();

//Middelwares
app.use(express.json());

app.use(router);

export default app;
