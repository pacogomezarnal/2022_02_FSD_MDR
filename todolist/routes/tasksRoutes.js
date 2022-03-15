/*
* Routes : tasks
*/
import express from "express"
import taskConstroller from "../controllers/TaskController.js";
const taskRoutes = express.Router();

/*API Definition*/
taskRoutes.get('/', taskConstroller.getAll);
//router.get('/:id', taskConstroller.getById);
//router.post('/',taskConstroller.insertTask);
//router.put('/:id', taskConstroller.updateTask);

export default taskRoutes;