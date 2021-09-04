const express = require("express");
const router = express.Router();

const mainControllers = require("../controllers/mainControllers");

router.get("/", mainControllers.home);

router.get("/service", mainControllers.service);

router.get("/associate", mainControllers.associate);

router.get("/contact", mainControllers.contact);

router.get("/detail", mainControllers.detail);

router.get("/create", mainControllers.create);

router.get("/edit", mainControllers.edit);

router.get("/register", mainControllers.register);

router.get("/login", mainControllers.login);

router.get("/cart", mainControllers.cart);

module.exports = router;
