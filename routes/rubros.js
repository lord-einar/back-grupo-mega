const {Router} = require('express');
const { rubrosGET, rubrosPOST } = require('../controllers/rubros');



const router = Router();

router.get("/", rubrosGET);

router.post("/", rubrosPOST);


module.exports = router;