const express = require("express");
const router = express.Router();

const usersRoutes = require("./api-users-router");

router.use("/users", usersRoutes);

module.exports = router;
