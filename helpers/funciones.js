const Marca = require("../models/Marca");
const Prestamo = require("../models/Prestamo");
const Remito = require("../models/Remito");
const Sede = require("../models/Sede");
const Stock = require("../models/Stock");
const TipoArticulo = require("../models/TipoArticulo");
const User = require("../models/User");

const remitoStock = async (id_remito, stocks) => {
  let datos = [];

  const remito = await Remito.findByPk(id_remito, {
    attributes: ["id", "numero", "userDestino", "prestamo", "fecha"],
    include: [
      { model: User, attributes: ["nombre"] },
      { model: Sede, attributes: ["nombre"] },
    ],
  });

  if (remito.prestamo) {
    await Prestamo.create({ id_remito });
  }

  for (const stock of stocks) {
    const stockInstance = await Stock.findByPk(stock);

    let respuesta = await remito.addStock(stockInstance);

    if (remito.prestamo) {
      await Stock.update(
        
        { prestamo: true },
        {
          where: { id: stock },
        }
      );

      await bajaStock(stock);
    }

    datos.push(respuesta);
  }

  let stockRemito = await generarRemito(id_remito);

  return { remito, stockRemito };
};

const bajaStock = (id) => {
  Stock.update({ fechaBaja: Date.now(), active: false }, { where: { id } });
};

const generarRemito = async (idRemito) => {
  const remito = await Remito.findByPk(idRemito);

  if (!remito) {
    throw new Error("No se encontró el Remito especificado");
  }
  const stocksDelRemito = await remito.getStocks({
    include: [
        { model: Marca, attributes: ["nombre"] },
        { model: TipoArticulo, attributes: ["nombre"] }
    ],
    attributes: ["nombre", "serie", "serviceTag"],
  });

  return stocksDelRemito;
};

module.exports = {
  remitoStock,
  generarRemito,
};
