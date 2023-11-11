const {Router} = require('express');
const { proveedoresGET, proveedoresPOST, proveedoresByID, proveedoresPUT } = require('../controllers/proveedores');


const router = Router();

router.get("/", proveedoresGET);

router.post("/", proveedoresPOST);

router.get("/:id", proveedoresByID);

router.put("/:id", proveedoresPUT)


module.exports = router;