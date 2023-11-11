const { DataTypes, Model, Sequelize } = require("sequelize");
const {sequelize} = require("../config/db.config")

class Rubro extends Model {}

Rubro.init(
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    nombre: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "Rubro",
  }
);

module.exports = Rubro;