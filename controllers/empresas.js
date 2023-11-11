const Empresa = require("../models/Empresa");



const empresaGET = async (req, res) => {
  const empresas = await Empresa.findAll({
    attributes: ['id', 'nombre'],
    order: [["nombre", "ASC"]]
    });

  res.json(empresas);
};


const empresaPOST = async (req, res) => {
  const { nombre, razonSocial, cuit, direccionFiscal } = req.body;

  const empresas = await Empresa.create({ nombre, razonSocial, cuit, direccionFiscal });

  res.json(empresas);
};


module.exports = {
    empresaGET,
    empresaPOST
};
