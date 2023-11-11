const { DataTypes, Model } = require("sequelize");
const {sequelize} = require("../config/db.config");

class Sede extends Model {}

Sede.init(
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    id_empresa: {
      type: DataTypes.UUID,
      allowNull: false,
    },
    nombre: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    direccion: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    localidad: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    provincia: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    pais: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    network_Sede: {
        type: DataTypes.STRING,
    },
    gerente_id: {
      type: DataTypes.UUID,
    },
    coordinador_id: {
      type: DataTypes.UUID,
    },
  },
  {
    sequelize,
    modelName: "Sede",
  }
);

// sequelize.sync({ alter: true });

module.exports = Sede;
