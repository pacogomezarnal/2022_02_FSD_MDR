/*
* Server principal
* TodoList
*/
/*Modulos necesarios arranque servidor*/
import express from "express"; //Framework y servidor
import dotenv from "dotenv"; //Variables de entorno
import sequelize from "./config/db.js"
import swaggerUi from "swagger-ui-express"

/*Carga de variables de configuracion*/
dotenv.config();
import swDocument from "./config/openapi_v2.js"
/*Rutas*/
import tareaRoutes from "./routes/tareaRoutes.js"
import usuarioRoutes from "./routes/usuarioRoutes.js"
import indexRoutes from "./routes/indexRoutes.js"


/*Conexion MariaDB*/

try {
  await sequelize.authenticate();
  console.log('Connection has been established successfully.');
} catch (error) {
  console.error('Unable to connect to the database:', error);
}

/*Configuración de servidor y middlewares*/
const app = express();
app.use(express.json());
app.use('/', indexRoutes);
app.use('/tareas', tareaRoutes);
app.use('/usuarios', usuarioRoutes);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swDocument));


/*Arranque servidor Express/Node*/
app.listen(process.env.SERVER_PORT || 3000, () => {
    console.log("Server Running en " + process.env.SERVER_PORT);
});

