const express = require("express");
const router = express.Router();

const userControllers = require("../controllers/userControllers");

router.get("/register", userControllers.register);

router.get("/login", userControllers.login);

router.get("/cart", userControllers.cart);

module.exports = router;

/* Esto no funciona, ignorar para un futuro buscar solucion y tener todo mas prolijo y ordenado */
