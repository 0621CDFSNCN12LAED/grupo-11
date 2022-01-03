const express = require("express");
const router = express.Router();
const multer = require("multer");
const path = require("path");
const { check } = require("express-validator");

const storage = multer.diskStorage({
  destination: path.join(__dirname, "../../public/img/professionalImage"),
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({ storage });

// Validaciones

const editCreateValidations = [
  check("professionalName")
    .notEmpty()
    .withMessage("Debes colocar tu nombre completo.")
    // .bail()
    // .isAlpha({locale:"es-ES", options: " -"}
    // .withMessage("El nombre no puede contener números.")
    .bail()
    .isLength({ min: 9 })
    .withMessage("Debes colocar un nombre válido."),
  check("professionalDescription")
    .isLength({ min: 20 })
    .withMessage("La descripcion debe tener mas de 20 caracteres"),
  check("professionalImage").custom((value, { req }) => {
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


const serviceControllers = require("../controllers/serviceControllers");

// Listado de profesinales
router.get("/professionals", serviceControllers.professionals);

// Detalle de un profesional
router.get("/detail/:id", serviceControllers.detail);

// Asociarte como profesional y crear perfil
router.get("/create", serviceControllers.create);
router.post("/", upload.single("professionalImage"), editCreateValidations , serviceControllers.store);

// Editar perfil del asociado
router.get("/edit/:id", serviceControllers.edit);
router.put("/edit/:id", upload.single("professionalImage"), editCreateValidations , serviceControllers.update);

// Borrar perfil de profesional asociado
router.delete("/:id", serviceControllers.destroy);

module.exports = router;
