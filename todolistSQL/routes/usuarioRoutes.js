/*
* Routes : tasks
*/
import express from "express";
import usuarioController from "../controllers/UsuarioController.js";
const usuarioRoutes = express.Router();


usuarioRoutes.post('/', usuarioController.getUser);

export default usuarioRoutes;