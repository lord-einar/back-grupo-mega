const { DataTypes, Model } = require("sequelize");
const {sequelize} = require("../config/db.config")

class Remito extends Model {}

Remito.init(
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    numero: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    id_user: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false
    },
    id_sede: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false
    },
    userDestino: {
      type: DataTypes.STRING,
      allowNull: false
    },
    prestamo: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    fecha: {
      type: DataTypes.DATE,
    },
  },
  {
    sequelize,
    modelName: "Remito",
  }
);

// sequelize.sync({ alter: true });


module.exports = Remito;
