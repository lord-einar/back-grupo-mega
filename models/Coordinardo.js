const { DataTypes, Model } = require("sequelize");
const { sequelize } = require("../config/db.config");

class Coordinador extends Model {}

Coordinador.init(
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    sede_id: {
        type: DataTypes.UUID,
        allowNull: false,
    },
    nombre: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    telefono: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    tipo: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "Coordinador",
  }
);

module.exports = Coordinador;
