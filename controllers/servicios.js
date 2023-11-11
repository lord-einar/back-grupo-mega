const Proveedor = require("../models/Proveedor");
const Rubro = require("../models/Rubro");
const Sede = require("../models/Sede");
const Servicio = require("../models/Servicio");

const serviciosGET = async (req, res) => {
  const servicios = await Servicio.findAll({
    include: [
      { 
        model: Proveedor,
        attributes: ["nombre"],
        include: [
          {
            model: Rubro,
            attributes: ["nombre"],
            through: { attributes: [] } // Esto evita que se incluyan datos anidados
          }
        ]
      },
      { model: Sede, attributes: ["nombre"] },
    ],
  });


  res.json(servicios);
};


const getServiciosByIDSede = async(req, res) => {
  const { id } = req.params;
  // console.log("identificacion", id)
  const servicios = await Servicio.findAll({ include: [
    { 
      model: Proveedor,
      attributes: ["nombre"],
      include: [
        {
          model: Rubro,
          attributes: ["nombre"],
          through: { attributes: [] } // Esto evita que se incluyan datos anidados
        }
      ]
    },
    { model: Sede, attributes: ["nombre"] },
  ], where: { id_sede: id } });
  // console.log("Lista servicios", servicios)
  res.json(servicios);
}

const serviciosPOST = async (req, res) => {
  const { id_proveedor, id_sede, numeroServicio, observaciones } = req.body;

  const servicios = await Servicio.create({ id_proveedor, id_sede, numeroServicio, observaciones });

  res.json(servicios);
};

module.exports = {
  serviciosGET,
  serviciosPOST,
  getServiciosByIDSede
};
