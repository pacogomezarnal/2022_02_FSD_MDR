/*
* Controller : Useuario
*/
import Tarea from "../models/TareaModel.js";
import Usuario from "../models/UsuarioModel.js";
import UsuarioTarea from "../models/UsuarioTareaModel.js";

//N-M
Tarea.belongsToMany(Usuario, { through: UsuarioTarea,foreignKey: 'idtarea' });
Usuario.belongsToMany(Tarea, { through: UsuarioTarea, foreignKey: 'idusuario' });

//Tarea controller
const UsuarioController={
    async getAll(req,res){
        try{
            const tareas = await Usuario.findAll();
            res.status(200).send(tareas);
        }catch (error){
            console.error(error);
            res.status(500).send({message:"Problem returning tasks",error});
        }
    },
    async getAllTareas(req,res){
        try{
            const tareas = await Usuario.findAll({include:Tarea});
            res.status(200).send(tareas);
        }catch (error){
            console.error(error);
            res.status(500).send({message:"Problem returning tasks",error});
        }
    }
}

export default UsuarioController;
