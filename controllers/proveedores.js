const Proveedor = require("../models/Proveedor");
const Rubro = require("../models/Rubro");

const proveedoresGET = async (req, res) => {
  const proveedores = await Proveedor.findAll({
    attributes: { exclude: ["createdAt", "updatedAt"] },
    include: { model: Rubro, attributes: ["nombre"] },
    order: [["nombre", "ASC"]],
  });

  res.json(proveedores);
};

const proveedoresByID = async(req, res) => {
  const { id } = req.params;
  const proveedores = await Proveedor.findByPk(id, {
    attributes: { exclude: ["createdAt", "updatedAt"] },
    include: { model: Rubro, attributes: ["nombre"] },
  });

  res.json(proveedores);
}

const proveedoresPUT = async(req, res) => {
  const { id } = req.params;
  const { nombre, id_rubro, ejecutivo_cuentas, mail_ejecutivo, empresa, soporteMail1, soporteTelefono1, soporteMail2, soporteTelefono2, soporteMail3, soporteTelefono3 } = req.body;

  const proveedores = await Proveedor.update(
    {
      nombre,
      id_rubro,
      ejecutivo_cuentas,
      mail_ejecutivo,
      empresa,
      soporteMail1,
      soporteTelefono1,
      soporteMail2,
      soporteTelefono2,
      soporteMail3,
      soporteTelefono3,
    },
    {
      where: { id },
    }
  );

  res.json({
    result: "ok",
    proveedores,
  });
}



const proveedoresPOST = async (req, res) => {
  const {
    nombre,
    id_rubro,
    ejecutivo_cuentas,
    mail_ejecutivo,
    empresa,
    soporteMail1,
    soporteTelefono1,
    soporteMail2,
    soporteTelefono2,
    soporteMail3,
    soporteTelefono3,
  } = req.body;

  const proveedores = await Proveedor.create(
    {
      nombre,
      id_rubro,
      ejecutivo_cuentas,
      mail_ejecutivo,
      empresa,
      soporteMail1,
      soporteTelefono1,
      soporteMail2,
      soporteTelefono2,
      soporteMail3,
      soporteTelefono3,
    }
  );

  const rubroInstance = await Rubro.findByPk(id_rubro);

  await proveedores.addRubro(rubroInstance);


  res.json({
    result: "ok",
    proveedores});
};

module.exports = {
  proveedoresGET,
  proveedoresPOST,
  proveedoresByID,
  proveedoresPUT
};
