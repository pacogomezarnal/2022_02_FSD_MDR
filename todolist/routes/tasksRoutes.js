/*
* Routes : tasks
*/
import express from "express"
import taskConstroller from "../controllers/TaskController.js";
const taskRoutes = express.Router();

/*API Definition*/
/**
 * @swagger
 * /tasks:
 *   get:
 *     summary: Lista de tareas
 *     description: DEvuelve una lista de tareas
 *     responses:
 *       200:
 *         description: lista de tareas
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 data:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       id:
 *                         type: integer
 *                         description: Id de la tarea
 *                         example: 1
 *                       description:
 *                         type: string
 *                         description: Descripcion corrta de la tarea
 *                         example: Finalizar documentacion swagger
 */
taskRoutes.get('/', taskConstroller.getAll);
//router.get('/:id', taskConstroller.getById);
//router.post('/',taskConstroller.insertTask);
//router.put('/:id', taskConstroller.updateTask);

export default taskRoutes;