/*
* Controller : Useuario
*/
import Tarea from "../models/TareaModel.js";
import Usuario from "../models/UsuarioModel.js";
import UsuarioTarea from "../models/UsuarioTareaModel.js";


//Tarea controller
const UsuarioController={
    async getUser(req,res){
        try{
            const usuario = await Usuario.findOne({ where: {'email':req.body['email']}});
            res.status(200).send(usuario);
        }catch (error){
            console.error(error);
            res.status(500).send({message:"Problem returning tasks",error});
        }
    }
}

export default UsuarioController;
