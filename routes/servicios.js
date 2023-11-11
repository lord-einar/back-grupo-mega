const {Router} = require('express');
const { serviciosGET, serviciosPOST, getServiciosByIDSede } = require('../controllers/servicios');


const router = Router();

router.get("/", serviciosGET);

router.post("/", serviciosPOST);

router.get("/:id", getServiciosByIDSede);


module.exports = router;