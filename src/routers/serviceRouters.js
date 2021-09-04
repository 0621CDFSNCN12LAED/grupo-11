const express = require("express");
const router = express.Router();

const serviceControllers = require("../controllers/serviceControllers");

router.get("/serviceDetail", serviceControllers.serviceDetail);

router.get("/create", serviceControllers.create);

router.get("/edit", serviceControllers.edit);

module.exports = router;

/* Esto no funciona, ignorar para un futuro buscar solucion y tener todo mas prolijo y ordenado */
