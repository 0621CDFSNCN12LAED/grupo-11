const express = require("express");
const router = express.Router();
const multer = require("multer");
const path = require("path");
const { check } = require("express-validator");

const storage = multer.diskStorage({
  destination: path.join(__dirname, "../../public/img/userImage"),
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({ storage });

// Validaciones

const validations = [
  check("userName")
    .notEmpty()
    .withMessage("Debes poner tu nombre completo.")
    // .bail()
    // .isAlpha({locale:"es-ES", options: " -"}
    // .withMessage("El nombre no puede contener números.")
    .bail()
    .isLength({ min: 9 })
    .withMessage("Debe ser un nombre válido."),
  check("email")
    .notEmpty()
    .withMessage("Debes poner tu correo.")
    .bail()
    .isEmail()
    .withMessage("Debes escribir un formato de correo válido."),
  check("birthday")
    .notEmpty()
    .withMessage("Debes poner tu fecha de nacimiento."),
  check("userPassword")
    .notEmpty()
    .withMessage("Debes poner una contraseña.")
    .bail()
    .isLength({ min: 8 })
    .withMessage("Tiene que tener un mínimo de 8 caracteres.")
    .bail(),
  check("userImage").custom((value, { req }) => {
    const file = req.file;
    const acceptedExtensions = [".jpg", ".jpeg", ".gif", ".png"];
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

const userControllers = require("../controllers/userControllers");

// Carrito?
router.get("/cart", userControllers.cart);

// Frmulario para ingresar a una cuenta ya registrada

router.get("/login", userControllers.login);
router.post("/login", userControllers.userlogin);

// Formulario de registrarse, nuevo usuario y procesar el registro

router.get("/register", userControllers.register);
router.post("/register", upload.single('userImage'), validations, userControllers.userRegister);

router.get("/edit/:id", userControllers.userEdit);
router.put("/edit/:id", upload.single('userImage'), userControllers.userUpdate);

router.get("/profile/:id", userControllers.userProfile);

router.delete("/profile/:id", userControllers.userDestroy);

module.exports = router;