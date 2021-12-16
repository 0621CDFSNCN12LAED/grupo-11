const express = require("express");
const router = express.Router();
const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
  destination: path.join(__dirname, "../../public/img/professionalImage"),
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({ storage });

const serviceControllers = require("../controllers/serviceControllers");

// Listado de profesinales
router.get("/professionals", serviceControllers.professionals);

// Detalle de un profesional
router.get("/detail/:id", serviceControllers.detail);

// Asociarte como profesional y crear perfil
router.get("/create", serviceControllers.create);
router.post("/", upload.single("professionalImage"), serviceControllers.store);

// Editar perfil del asociado
router.get("/edit/:id", serviceControllers.edit);
router.put("/edit/:id", upload.single("professionalImage"), serviceControllers.update);

// Borrar perfil de profesional asociado
router.delete("/:id", serviceControllers.destroy);

module.exports = router;
