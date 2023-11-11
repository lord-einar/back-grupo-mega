const { DataTypes, Model, Sequelize } = require("sequelize");
const {sequelize} = require("../config/db.config")

class Marca extends Model {}

Marca.init(
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
    modelName: "Marca",
  }
);

module.exports = Marca;