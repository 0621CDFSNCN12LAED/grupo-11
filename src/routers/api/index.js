const express = require("express");
const router = express.Router();

const usersAPIRouters = require("./api-users-router");
router.use(usersAPIRouters);

const professionalsAPIRouters = require("./api-professionals-router");
router.use(professionalsAPIRouters);

module.exports = router;
