/*
* Routes : tasks
*/
import express from "express"
const indexRoutes = express.Router();

/*API Definition*/
indexRoutes.get('/', function(req, res, next) {
    res.status(200).send("Proyecto ToDoList");
});

export default indexRoutes;