const {Router} = require('express');
const { sedeGET, sedePOST, sedesByID } = require('../controllers/sedes');




const router = Router();

router.get("/", sedeGET);

router.post("/", sedePOST);

router.get("/:id", sedesByID);


module.exports = router;