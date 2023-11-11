const { DataTypes, Model } = require("sequelize");
const {sequelize} = require("../config/db.config")

class User extends Model {}

User.init(
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    user: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    nombre: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    active: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
  },
  {
    sequelize,
    modelName: "User",
  }
);

module.exports = User;