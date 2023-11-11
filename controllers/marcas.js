const Marca = require("../models/Marca");


const marcaGET = async (req, res) => {
  const marcas = await Marca.findAll({
    attributes: ['id', 'nombre'],
    order: [["nombre", "ASC"]]
    });

  res.json(marcas);
};


const marcaPOST = async (req, res) => {
  const { nombre } = req.body;

  const marcas = await Marca.create({ nombre });

  res.json(marcas);
};


module.exports = {
    marcaGET,
    marcaPOST
};
