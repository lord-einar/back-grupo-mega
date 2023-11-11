const { DataTypes, Model } = require("sequelize");
const { sequelize } = require("../config/db.config");

class Proveedor extends Model {}

Proveedor.init(
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
    id_rubro: {
      type: DataTypes.UUID,
      allowNull: false,
    },
    ejecutivo_cuentas: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    mail_ejecutivo: {
        type: DataTypes.STRING,
    },
    empresa: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    soporteMail1: {
      type: DataTypes.STRING,
    },
    soporteTelefono1: {
      type: DataTypes.STRING,
    },
    soporteMail2: {
      type: DataTypes.STRING,
    },
    soporteTelefono2: {
      type: DataTypes.STRING,
    },
    soporteMail3: {
      type: DataTypes.STRING,
    },
    soporteTelefono3: {
      type: DataTypes.STRING,
    },
  },
  {
    sequelize,
    modelName: "Proveedor",
  }
);

module.exports = Proveedor;
