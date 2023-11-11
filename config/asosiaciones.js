const Prestamo = require("../models/Prestamo");
const Remito = require("../models/Remito");
const Sede = require("../models/Sede");
const Stock = require("../models/Stock");
const TipoArticulo = require("../models/TipoArticulo");
const User = require("../models/User");
const Marca = require("../models/Marca");
const Coordinador = require("../models/Coordinardo");
const Gerente = require("../models/Gerente");
const Rubro = require("../models/Rubro");
const Proveedor = require("../models/Proveedor");
const Servicio = require("../models/Servicio");
const Empresa = require("../models/Empresa");


Marca.hasMany(Stock, {foreignKey: "id_marca"})
Stock.belongsTo(Marca, {foreignKey: "id_marca"})

TipoArticulo.hasMany(Stock, {foreignKey: "id_tipoArticulo"})
Stock.belongsTo(TipoArticulo, {foreignKey: "id_tipoArticulo"})

Remito.hasOne(Prestamo, {foreignKey: "id_remito"})
Prestamo.belongsTo(Remito, {foreignKey: "id_remito"})

User.hasMany(Remito, {foreignKey: "id_user"})
Remito.belongsTo(User, {foreignKey: "id_user"})

Sede.hasMany(Remito, {foreignKey: "id_sede"})
Remito.belongsTo(Sede, {foreignKey: "id_sede"})

Proveedor.hasMany(Servicio, {foreignKey: "id_proveedor"})
Servicio.belongsTo(Proveedor, {foreignKey: "id_proveedor"})

Sede.hasMany(Servicio, {foreignKey: "id_sede"})
Servicio.belongsTo(Sede, {foreignKey: "id_sede"})

Empresa.hasMany(Sede, {foreignKey: "id_empresa"})
Sede.belongsTo(Empresa, {foreignKey: "id_empresa"})

Sede.belongsToMany(Gerente, {through: "sede_gerente"})
Gerente.belongsToMany(Sede, {through: "sede_gerente"})

Sede.belongsToMany(Coordinador, {through: "sede_coordinador"})
Coordinador.belongsToMany(Sede, {through: "sede_coordinador"})

Proveedor.belongsToMany(Rubro, {through: "rubro_proveedor"})
Rubro.belongsToMany(Proveedor, {through: "rubro_proveedor"})

Remito.belongsToMany(Stock, {through: "stock_remito"})
Stock.belongsToMany(Remito, {through: "stock_remito"})