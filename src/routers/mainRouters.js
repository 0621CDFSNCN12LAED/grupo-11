const express = require("express");
const router = express.Router();

const mainControllers = require ("../Controllers/mainControllers");
// ver que pasa con routerssss con ss


router.get ('/', mainControllers.home);

router.get ('/register', mainControllers.register);

router.get ('/login', mainControllers.login);

router.get ('/service', mainControllers.service);


module.exports = router;

