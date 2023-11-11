const { DataTypes, Model } = require("sequelize");
const {sequelize} = require("../config/db.config")

class TipoArticulo extends Model {}

TipoArticulo.init(
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
    modelName: "TipoArticulo",
  }
);

module.exports = TipoArticulo;