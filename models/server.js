const express = require("express");
const cors = require("cors");
const { dbConnect } = require("../config/db.config");
require('../config/asosiaciones')

class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT;

    this.conectarDB();
    this.middlewares();

    this.routes();
  }

  async conectarDB() {
    await dbConnect();
  }

  middlewares() {
    //CORS
    this.app.use(cors());

    //Lectura y parseo JSON
    this.app.use(express.json());

    //Carpeta estatica
    this.app.use(express.static("public"));
  }

  routes() {
    this.app.use("/users", require("../routes/users"));
    this.app.use("/sedes", require("../routes/sedes"));
    this.app.use("/marcas", require("../routes/marcas"));
    this.app.use("/tipoArticulo", require("../routes/tipoArticulos"));
    this.app.use("/stock", require("../routes/stock"));
    this.app.use("/remitos", require("../routes/remitos"));
    this.app.use("/prestamos", require("../routes/prestamos"));
    this.app.use("/rubros", require("../routes/rubros"));
    this.app.use("/proveedores", require("../routes/proveedores"));
    this.app.use("/empresas", require("../routes/empresas"));
    this.app.use("/servicios", require("../routes/servicios"));
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log(`Example app listening at http://localhost:${this.port}`);
    });
  }
}

module.exports = Server;