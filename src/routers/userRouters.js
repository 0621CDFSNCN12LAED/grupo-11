const express = require("express");
const router = express.Router();
const multer = require("multer");
const path = require("path");
const { check } = require("express-validator");

const storage = multer.diskStorage({
  destination: path.join(__dirname, "../../public/img/profile"),
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({ storage });

const userControllers = require("../controllers/userControllers");

router.get("/cart", userControllers.cart);

// Formulario para ingresar a una cuenta ya registrada
router.get("/login", userControllers.login);
router.post("/login", userControllers.userlogin);

// Formulario de registrarse, nuevo usuario
router.get("/register", userControllers.register);
//Procesar el registro
router.post(
  "/register",
  upload.single("user-image"),
  userControllers.userRegister
);

//Membresías disponibles
router.get("/memberships", userControllers.memberships);

module.exports = router;
