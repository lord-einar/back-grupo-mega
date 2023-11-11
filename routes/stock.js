const {Router} = require('express');
const { stockGET, stockPOST, filtroStock } = require('../controllers/stock');
const { check } = require("express-validator");
const { validarCampos } = require('../middlewares/validar-campos');


const router = Router();

router.get("/:limit/:offset", stockGET);

router.get("/filter", filtroStock)

router.post("/", stockPOST);


module.exports = router;