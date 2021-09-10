const express = require("express");
const router = express.Router();

const serviceControllers = require("../controllers/serviceControllers");

router.get("/create", serviceControllers.create);

router.get("/detail", serviceControllers.detail);

router.get("/edit", serviceControllers.edit);

module.exports = router;
