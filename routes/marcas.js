const {Router} = require('express');
const { marcaGET, marcaPOST } = require('../controllers/marcas');


const router = Router();

router.get("/", marcaGET);

router.post("/", marcaPOST);


module.exports = router;