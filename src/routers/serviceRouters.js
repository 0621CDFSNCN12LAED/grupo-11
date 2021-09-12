const express = require("express");
const router = express.Router();

const serviceControllers = require("../controllers/serviceControllers");

// enviar informacion para crear producto
router.get("/create", serviceControllers.create);
router.post("/create", serviceControllers.send);


//Editar un profesional 
router.get("/edit/:id", serviceControllers.edit);
router.put("/edit/:id", serviceControllers.editProducts);


//detalle de un profesional 
router.get("/:id", serviceControllers.detail);

//para borrar  un perfil del profesional 
router.delete("/:id", serviceControllers.delete);



module.exports = router;
