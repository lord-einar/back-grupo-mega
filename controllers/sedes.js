const Empresa = require("../models/Empresa");
const Sede = require("../models/Sede");

const sedeGET = async (req, res) => {
  const sedes = await Sede.findAll({
    attributes: { exclude: ["createdAt", "updatedAt"] },
    include: {
      model: Empresa,
      attributes: ["nombre"],
    },
    order: [["nombre", "ASC"]],
  });

  res.json(sedes);
};

const sedePOST = async (req, res) => {
  const {
    id_empresa,
    nombre,
    direccion,
    localidad,
    provincia,
    pais,
    network_Sede,
    gerentes,
    coordinadores,
  } = req.body;

  const sedes = await Sede.create({
    id_empresa,
    nombre,
    direccion,
    localidad,
    provincia,
    pais,
    network_Sede,
    gerentes,
    coordinadores,
  });

  res.json({
    result: "ok",
    sedes});
};

const sedesByID = async(req, res) => {
  const { id } = req.params;
  console.log(id)
  const sedes = await Sede.findByPk(id, {
    attributes: { exclude: ["createdAt", "updatedAt"] },
    include: { model: Empresa, attributes: ["nombre"] },
  });
  
  res.json(sedes);
}


module.exports = {
  sedeGET,
  sedePOST,
  sedesByID,
};
