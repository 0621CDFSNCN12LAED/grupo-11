const express = require("express");
const router = express.Router();
const multer = require("multer");

const serviceControllers = require("../controllers/serviceControllers");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname, "../public/img/professional-img"));
  },
  filename: (req, file, cb) => {
    const newFilename = "group-" + Date.now() + path.extname(file.originalname);
    cb(null, newFilename);
  },
});

const upload = multer({ storage });

// Listado de profesinales
router.get("/professionals", serviceControllers.professionals);

// Asociarte como profesional y crear perfil
router.get("/create", serviceControllers.create);
router.post("/create", upload.single("profile-img"), serviceControllers.save);

// Editar perfil del asociado
router.get("/edit/:id", serviceControllers.edit);
router.put("/edit", serviceControllers.editSave);

// Detalle de un profesional
router.get("/detail/:id", serviceControllers.detail);

// Borrar perfil de profesional asociado
router.delete("/:id", serviceControllers.delete);

module.exports = router;
