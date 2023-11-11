const Rubro = require("../models/Rubro");

const rubrosGET = async (req, res) => {
  const rubros = await Rubro.findAll({
    attributes: ["id", "nombre"],
    order: [["nombre", "ASC"]],
  });

  res.json(rubros);
};

const rubrosPOST = async (req, res) => {
  const { nombre } = req.body;

  const rubros = await Rubro.create({ nombre });

  res.json(rubros);
};

module.exports = {
  rubrosGET,
  rubrosPOST,
};
