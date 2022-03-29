import { DataTypes, Model } from "sequelize";
import sequelize from "../config/db.js"

class Usuario extends Model {}

Usuario.init({
  // Model attributes are defined here
  idusuario: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  nombre: {
    type: DataTypes.STRING,
    allowNull: true
  },
  apellidos: {
    type: DataTypes.STRING,
    allowNull: true
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false
  },
}, {
  // Other model options go here
  timestamps: false,
  sequelize, // We need to pass the connection instance
  modelName: 'usuario' // We need to choose the model name
});

export default Usuario;
