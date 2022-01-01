const express = require("express");
const router = express.Router();

const usersRouters = require("./api-users-router");
router.use(usersRouters);

module.exports = router;
