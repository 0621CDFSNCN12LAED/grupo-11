const express = require("express");
const router = express.Router();

const mainControllers = require("../controllers/mainControllers");

//API
const apiRouter = require("./api/index");
router.use("/api", apiRouter);

router.get("/associate", mainControllers.associate);

router.get("/", mainControllers.home);

router.get("/service", mainControllers.service);

router.get("/memberships", mainControllers.memberships);

module.exports = router;
