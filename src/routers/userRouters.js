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

//Validaciones
const validations = [
  check("name")
    .notEmpty()
    .withMessage("Este campo es obligatorio.")
    .bail()
    .isLength({ min: 2 })
    .withMessage("Debe tener al menos 2 caracteres."),
  check("email")
    .notEmpty()
    .withMessage("Este campo es obligatorio.")
    .bail()
    .isEmail()
    .withMessage("Debes escribir un formato de correo válido."),
  check("password")
    .notEmpty()
    .withMessage("Este campo es obligatorio.")
    .bail()
    .isLength({ min: 8 }),
  check("user-image").custom((value, { req }) => {
    const file = req.file;
    const acceptedExtensions = [".jpg", ".jpeg", ".png", ".gif1"];
    const fileExtension = path.extname(file.originalname);
    if (!file) {
      throw new Error("Debes subir una imagen");
    } else {
      const fileExtension = path.extname(file.originalname);
      if (!acceptedExtensions.includes(fileExtension)) {
        throw new Error(
          `Las extensiones de archivo permitidas son ${acceptedExtensions.join(
            ", "
          )}`
        );
      }
    }
    return true;
  }),
];

// Formulario para ingresar a una cuenta ya registrada

router.get("/login", userControllers.login);
router.post("/login", userControllers.userlogin);

// Formulario de registrarse, nuevo usuario

router.get("/register", userControllers.register);

//Procesar el registro

router.post(
  "/register",
  upload.single("user-image"),
  validations,
  userControllers.userRegister
);

//Membresías disponibles

router.get("/memberships", userControllers.memberships);

module.exports = router;
