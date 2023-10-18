import express from "express";
import pg from "pg";
config();

const app = express();
const port = process.env.PORT || 3000;
const pool = new pg.Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: true,
});

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(port);

console.log("Server on port ", port);
