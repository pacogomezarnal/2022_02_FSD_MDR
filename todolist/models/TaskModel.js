/*
* Model : Task
*/
import mongoose from "mongoose";
const { Schema } = mongoose;

/*Definicion del esquema Task*/
const taskSchema = new Schema({
    description:  {
        type:String,
        require:[true,"La descripcion es obligatoria"]
    },
    data_start: Date,
    num_days:   Number
  });

/*Creacion del modelo*/
const Task = mongoose.model('Task', taskSchema);

export default Task;