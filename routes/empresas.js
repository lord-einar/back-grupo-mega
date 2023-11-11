const {Router} = require('express');
const { empresaGET, empresaPOST } = require('../controllers/empresas');


const router = Router();

router.get("/", empresaGET);

router.post("/", empresaPOST);


module.exports = router;