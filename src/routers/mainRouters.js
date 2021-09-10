const express = require("express");
const router = express.Router();

const mainControllers = require("../controllers/mainControllers");

router.get("/associate", mainControllers.associate);

router.get("/", mainControllers.home);

router.get("/professionals", mainControllers.professionals);

router.get("/service", mainControllers.service);

module.exports = router;
