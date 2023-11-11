const { DataTypes, Model } = require("sequelize");
const { sequelize } = require("../config/db.config");

class Servicio extends Model {}

Servicio.init(
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    id_proveedor: {
      type: DataTypes.UUID,
      allowNull: false,
    },
    id_sede: {
      type: DataTypes.UUID,
      allowNull: false,
    },
    numeroServicio: {
      type: DataTypes.STRING,
    },
    observaciones: {
        type: DataTypes.STRING,
    }
  },
  {
    sequelize,
    modelName: "Servicio",
  }
);

module.exports = Servicio;
