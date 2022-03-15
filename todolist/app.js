/*
* Server principal
* TodoList
*/
/*Modulos necesarios arranque servidor*/
import express from "express"; //Framework y servidor
import mongoose from "mongoose"; //Mongoose
import swaggerUi from "swagger-ui-express"
import swaggerJsdoc from "swagger-jsdoc";

/*Carga de ficheros de configuracion*/
import serverConfig from "./config/server.js"
import dbConfig from "./config/db.js"
import optionsSW from "./config/sw.js"

/*Rutas*/
import taskRoutes from "./routes/tasksRoutes.js"
import indexRoutes from "./routes/indexRoutes.js"


/*Conexion MongoDB*/
connect()
    .then(()=>console.log("MongoDB connected"))
    .catch(err => console.log(err));

async function connect() {
  await mongoose.connect(dbConfig.db+'://'+dbConfig.host+":"+dbConfig.port+"/"+dbConfig.collection);
}

/*Configuracion swaggerJsdoc*/
const swJSdoc = swaggerJsdoc (optionsSW);

/*Configuración de servidor y middlewares*/
const app = express();
app.use('/', indexRoutes);
app.use('/tasks', taskRoutes);
app.use('/api-docs', swaggerUi.serve,swaggerUi.setup(swJSdoc, { explorer: true }));


/*Arranque servidor Express/Node*/
app.listen(serverConfig.port, () => {
    console.log("Server Running");
});

