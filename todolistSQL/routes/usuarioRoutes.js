/*
* Routes : tasks
*/
import express from "express"
import usuarioController from "../controllers/UsuarioController.js";
const usuarioRoutes = express.Router();


usuarioRoutes.get('/', usuarioController.getAll);
usuarioRoutes.get('/tareas/', usuarioController.getAllTareas);
//usuarioRoutes.get('/:id', usuarioController.getById);
//router.post('/',taskConstroller.insertTask);
//router.put('/:id', taskConstroller.updateTask);

export default usuarioRoutes;