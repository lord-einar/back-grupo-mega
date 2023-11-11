const { DataTypes, Model, Sequelize } = require("sequelize");
const { sequelize } = require("../config/db.config");

class Empresa extends Model {}

Empresa.init(
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
    razonSocial: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    cuit: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    direccionFiscal: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "Empresa",
  }
);

module.exports = Empresa;
