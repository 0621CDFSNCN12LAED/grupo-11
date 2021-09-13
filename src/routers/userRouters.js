const express = require("express");
const router = express.Router();

const userControllers = require("../controllers/userControllers");

router.get("/cart", userControllers.cart);

// Formulario para ingresar a una cuenta ya registrada
router.get("/login", userControllers.login);
router.post("/login", userControllers.userlogin);

// Formulario de registrarse, nuevo usuario
router.get("/register", userControllers.register);
router.post("/register", userControllers.userRegister);

module.exports = router;
