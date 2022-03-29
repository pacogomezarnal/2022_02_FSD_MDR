/*
* Server principal
* TodoList
*/
/*Modulos necesarios arranque servidor*/
import express from "express"; //Framework y servidor
import mongoose from "mongoose"; //Mongoose
import dotenv from "dotenv"; //Variables de entorno
import swaggerUi from "swagger-ui-express"
import swaggerJsdoc from "swagger-jsdoc";

/*Carga de variables de configuracion*/
dotenv.config();
//import optionsSW from "./config/sw.js" //Configuracio JSDocs
import swDocument from "./config/openapi.js"
/*Rutas*/
import taskRoutes from "./routes/tasksRoutes.js"
import indexRoutes from "./routes/indexRoutes.js"


/*Conexion MongoDB*/
connect()
    .then(()=>console.log("MongoDB connected"))
    .catch(err => console.log(err));

async function connect() {
  await mongoose.connect(process.env.DB_URI);
}

/*Configuracion swaggerJsdoc*/
//const swJSdoc = swaggerJsdoc (optionsSW);

/*Configuración de servidor y middlewares*/
const app = express();
app.use('/', indexRoutes);
app.use('/tasks', taskRoutes);
// app.use('/api-docs', swaggerUi.serve,swaggerUi.setup(swJSdoc, { explorer: true })); Configuracion con JSdocs
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swDocument));


/*Arranque servidor Express/Node*/
app.listen(process.env.PORT || 3000, () => {
    console.log("Server Running en " + process.env.PORT);
});

