const {Router} = require('express');
const { prestamosGET, prestamosStockGET } = require('../controllers/prestamos');



const router = Router();

router.get("/", prestamosGET);

router.get("/stock", prestamosStockGET);


module.exports = router;