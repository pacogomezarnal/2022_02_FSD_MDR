/*
* Routes : tasks
*/
import express from "express"
import tareaConstroller from "../controllers/TareaController.js";
const tareaRoutes = express.Router();


tareaRoutes.get('/', tareaConstroller.getAllTasks);
tareaRoutes.get('/usuarios/', tareaConstroller.getAllWithUsers);
tareaRoutes.get('/:id', tareaConstroller.getTaskById);
tareaRoutes.post('/',tareaConstroller.insertTask);
//router.put('/:id', taskConstroller.updateTask);

export default tareaRoutes;