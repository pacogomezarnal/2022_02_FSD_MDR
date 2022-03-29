import { Sequelize } from "sequelize"; //sequalizr
import dotenv from "dotenv"; //Variables de entorno

/*Carga de variables de configuracion*/
dotenv.config();
const sequelize = new Sequelize(process.env.DB_URI);

export default sequelize;