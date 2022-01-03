const express = require("express");
const router = express.Router();
const professionalsAPIController = require("../../controllers/api/api-professionals-controller");

router.get("/api/professionals", professionalsAPIController.list);
router.get("/api/professionals/:id", professionalsAPIController.detail);

module.exports = router;
