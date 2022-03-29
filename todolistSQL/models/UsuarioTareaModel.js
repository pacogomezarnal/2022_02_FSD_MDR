import { DataTypes, Model } from "sequelize";
import sequelize from "../config/db.js"

class Tarea_Usuario extends Model {}

Tarea_Usuario.init({
  // Model attributes are defined here
  idtarea: {
    type: DataTypes.INTEGER,
    primaryKey: true
  },
  idusuario: {
    type: DataTypes.INTEGER,
    primaryKey: true
  },
}, {
  // Other model options go here
  timestamps: false,
  sequelize, // We need to pass the connection instance
  modelName: 'tareas_usuarios' // We need to choose the model name
});

export default Tarea_Usuario;