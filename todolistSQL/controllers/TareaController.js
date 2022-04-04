/*
* Controller : Tarea
*/
import Tarea from "../models/TareaModel.js";
import Usuario from "../models/UsuarioModel.js";
import UsuarioTarea from "../models/UsuarioTareaModel.js";

//N-M
Tarea.belongsToMany(Usuario, { through: UsuarioTarea,foreignKey: 'idtarea' });
Usuario.belongsToMany(Tarea, { through: UsuarioTarea, foreignKey: 'idusuario' });

//Tarea controller
const TareaController={
    async getAllTasks(req,res){
        try{
            const tareas = await Tarea.findAll();
            res.status(200).send(tareas);
        }catch (error){
            console.error(error);
            res.status(500).send({message:"Problem returning tasks",error});
        }
    },
    async getAllWithUsers(req,res){
        try{
            const tareas = await Tarea.findAll({include:Usuario});
            res.status(200).send(tareas);
        }catch (error){
            console.error(error);
            res.status(500).send({message:"Problem returning tasks",error});
        }
    },
    async getTaskById(req,res){
        try{
            const tarea = await Tarea.findByPk(req.params['id']);
            res.status(200).send(tarea);
        }catch (error){
            console.error(error);
            res.status(500).send({message:"Problem returning tasks",error});
        }
    },
    async insertTask(req,res){
        try{
            console.log(req.body);
            const tarea = await Tarea.create(req.body);
            res.status(200).send("OK");
        }catch (error){
            console.error(error);
            res.status(500).send({message:"Problem returning tasks",error});
        }
    },
    async updateTask(req,res){
        try{
            console.log(req.body);
            const tarea = await Tarea.update(req.body, {
                where: {
                  idtarea: req.params['id']
                }
            });
            res.status(200).send("OK");
        }catch (error){
            console.error(error);
            res.status(500).send({message:"Problem returning tasks",error});
        }
    }
}

export default TareaController;
