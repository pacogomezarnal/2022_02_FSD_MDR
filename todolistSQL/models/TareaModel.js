import { DataTypes, Model } from "sequelize";
import sequelize from "../config/db.js"

class Tarea extends Model {}

Tarea.init({
  // Model attributes are defined here
  idtarea: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  nombre: {
    type: DataTypes.STRING,
    allowNull: false
  },
  descripcion: {
    type: DataTypes.STRING
  },
  fecha_ini
  : {
    type: DataTypes.DATE
  },
  estimada
  : {
    type: DataTypes.INTEGER
  },
}, {
  // Other model options go here
  timestamps: false,
  sequelize, // We need to pass the connection instance
  modelName: 'tarea' // We need to choose the model name
});

export default Tarea;
