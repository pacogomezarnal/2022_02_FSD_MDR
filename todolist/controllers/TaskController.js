/*
* Controller : Task
*/
import Task from "../models/TaskModel.js";

const TaskController={
    async getAll(req,res){
        try{
            const tasks=await Task.find();
            res.status(200).send(tasks);
        }catch (error){
            console.error(error);
            res.status(500).send({message:"Problem returning tasks",error});
        }
    }
}

export default TaskController;
