const Prestamo = require("../models/Prestamo");
const Remito = require("../models/Remito");
const Stock = require("../models/Stock");

const prestamosGET = async (req, res) => {
  const prestamos = await Prestamo.findAll({
    attributes: ["id", "id_remito"],
    include: Remito,
  });

  res.json(prestamos);
};

const prestamosStockGET = async (req, res) => {
  const prestamos = await Stock.findAll({
    where: { prestamo: true },
    attributes: ["id", "id_remito", "nombre", "serie"],
    include: Remito,
  });

  res.json(prestamos);
};

module.exports = {
  prestamosGET,
  prestamosStockGET,
};
