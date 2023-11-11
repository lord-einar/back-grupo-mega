const { remitoStock, generarRemito } = require("../helpers/funciones");
const Remito = require("../models/Remito");
const Sede = require("../models/Sede");
const Stock = require("../models/Stock");
const User = require("../models/User");

const remitoGET = async (req, res) => {
  let { limit = 5, offset = 0 } = req.params;
  limit = parseInt(limit);
  offset = parseInt(offset);

  const remitos = await Remito.findAndCountAll({
    attributes: ["id", "numero", "userDestino", "prestamo", "fecha"],
    include: [
      { model: User, attributes: ["nombre"] },
      { model: Stock, attributes: ["nombre", "serie"] },
      { model: Sede, attributes: ["nombre", "direccion", "localidad"] },
    ],
    offset,
    limit,
  });

  res.json(remitos);
};

const remitoByNumero = async (req, res) => {
  let { numero } = req.params;

  const remito = await Remito.findOne({
    where: { numero },
    attributes: ["id", "numero", "userDestino", "prestamo", "fecha"],
    include: [
      { model: User, attributes: ["nombre"] },
      { model: Stock, attributes: ["nombre", "serie"] },
      { model: Sede, attributes: ["nombre", "direccion", "localidad"] },
    ],
  });

  const stock = await generarRemito(remito.id);

  res.json({remito, stock});
}

const remitoByIdGET = async (req, res) => {
  let { id } = req.params;

  const remito = await Remito.findByPk(id, {
    attributes: ["id", "numero", "userDestino", "prestamo", "fecha"],
    include: [
      { model: User, attributes: ["nombre"] },
      { model: Sede, attributes: ["nombre", "direccion", "localidad"] },
    ],
  });
  const stock = await generarRemito(id);

  res.json({remito, stock});
};

const remitoPOST = async (req, res) => {
  const { numero, id_user, id_sede, userDestino, prestamo, fecha, stocks } =
    req.body;

  const remito = await Remito.create({
    numero,
    id_user,
    id_sede,
    userDestino,
    prestamo,
    fecha,
  });

  let remitoCOmpleto = await remitoStock(remito.id, stocks);

  res.json({ remitoCOmpleto });
};

module.exports = {
  remitoGET,
  remitoPOST,
  remitoByIdGET,
  remitoByNumero
};
