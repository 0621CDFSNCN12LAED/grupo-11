const express = require("express");
const router = express.Router();
const membershipsController = require("./controllers/membershipsController");

router.get("/select", membershipsController.select);
router.post("/select", membershipsController.seleccion);
module.exports = router;
