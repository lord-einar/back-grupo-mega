const {Router} = require('express');
const { tipoArticuloGET, tipoArticuloPOST } = require('../controllers/tipoArticulo');


const router = Router();

router.get("/", tipoArticuloGET);

router.post("/", tipoArticuloPOST);


module.exports = router;