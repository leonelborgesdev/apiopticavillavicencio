import app from "./app.js";
import { sequelize } from "./database/database.js";
import "./models/Cliente.js";
import "./models/Cita.js";

async function main() {
  try {
    await sequelize.sync({ force: true });
    console.log("conexion exitosa");
    app.listen(3000);
    console.log("Server is listening on port ", 3000);
  } catch (error) {
    console.log("error en la conexion", error);
  }
}

main();
