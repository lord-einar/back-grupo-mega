const { DataTypes, Model } = require("sequelize");
const {sequelize} = require("../config/db.config")

class Stock extends Model {}

Stock.init(
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
    id_marca: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
    },
    id_tipoArticulo: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
    },
    serie: {
      type: DataTypes.STRING,
    },
    serviceTag: {
      type: DataTypes.STRING,
    },
    id_remito: {
      type: DataTypes.UUID,
      defaultValue: null,
    },
    prestamo: {
      type: DataTypes.BOOLEAN
    },
    fechaBaja: {
      type: DataTypes.DATE,
    },
    active: {
      type: DataTypes.BOOLEAN,
      defaultValue: true
    }
  },
  {
    sequelize,
    modelName: "Stock",
  }
);


module.exports = Stock;