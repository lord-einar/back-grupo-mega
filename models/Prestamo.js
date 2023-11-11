const { DataTypes, Model } = require("sequelize");
const {sequelize} = require("../config/db.config")

class Prestamo extends Model {}

Prestamo.init(
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    id_remito: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
    },
    fechaDevolucion: {
      type: DataTypes.DATE,
    },
  },
  {
    sequelize,
    modelName: "Prestamo",
  }
);



module.exports = Prestamo;