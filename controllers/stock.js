const Marca = require("../models/Marca");
const Remito = require("../models/Remito");
const Stock = require("../models/Stock");
const TipoArticulo = require("../models/TipoArticulo");

const stockGET = async (req, res) => {
  let { limit = 5, offset = 0 } = req.params;
  limit = parseInt(limit);
  offset = parseInt(offset);

  const stocks = await Stock.findAndCountAll({
    include: [
      { model: Marca, attributes: ["nombre"] },
      { model: TipoArticulo, attributes: ["nombre"] },
      { model: Remito },
    ],
    attributes: {
      exclude: ["id_marca", "id_tipoArticulo", "id_remito", "createdAt", "updatedAt"],
    },
  });

  res.json(stocks);
};

const filtroStock = async(req, res) => {
  const {id_marca, id_tipoArticulo} = req.body

  console.log("marca:", id_marca);
  console.log("tipo:", id_tipoArticulo);
}

const stockPOST = async (req, res) => {
  const {
    nombre,
    id_marca,
    id_tipoArticulo,
    serie,
    serviceTag,
    id_remito,
    fechaBaja,
  } = req.body.datos;

  console.log(req.body.datos)
  const sedes = await Stock.create({
    nombre,
    id_marca,
    id_tipoArticulo,
    serie,
    serviceTag,
    id_remito,
    fechaBaja,
  });

  res.json(sedes);
};

module.exports = {
  stockGET,
  stockPOST,
  filtroStock
};
