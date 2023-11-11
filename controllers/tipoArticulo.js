const TipoArticulo = require("../models/TipoArticulo");


const tipoArticuloGET = async (req, res) => {
  const tipoArticulos = await TipoArticulo.findAll({ 
    attributes: ['id', 'nombre'],
    order: [["nombre", "ASC"]]
  });

  res.json(tipoArticulos);
};


const tipoArticuloPOST = async (req, res) => {
  const { nombre } = req.body;

  const tipoArticulos = await TipoArticulo.create({ nombre });

  res.json(tipoArticulos);
};


module.exports = {
    tipoArticuloGET,
    tipoArticuloPOST
};
