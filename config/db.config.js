const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(
  process.env.DATABASE,
  process.env.USER,
  process.env.PASS,
  {
    host: "localhost",
    dialect: "mysql",
  }
);

const dbConnect = () => {
  sequelize
    .authenticate()
    .then(() => {
      console.log("Base de datos conectada");
      sequelize.sync({ force: false});
    })
    .catch((error) => {
      console.log("Error:", error);
    });
};

module.exports = {dbConnect, sequelize};
