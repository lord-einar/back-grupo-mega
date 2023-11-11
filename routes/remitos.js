const {Router} = require('express');
const { remitoGET, remitoPOST, remitoByIdGET, remitoByNumero } = require('../controllers/remitos');
const { check } = require("express-validator");
const { validarCampos } = require('../middlewares/validar-campos');



const router = Router();

router.get("/listar/:limit/:offset", remitoGET);

router.get("/id/:id", remitoByIdGET);

router.get("/numero/:numero", remitoByNumero);


router.post("/", [
    check("id_user", "El usuario ingresado no es válido").isUUID(),
    validarCampos
], remitoPOST);


module.exports = router;