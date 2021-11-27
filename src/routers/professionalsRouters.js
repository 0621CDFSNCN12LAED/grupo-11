const express = require("express");
const router = express.Router();

//Copié y pegué del archivo serviceRouters.js
const storage = multer.diskStorage({
  destination: path.join(__dirname, "../../public/img/profile"),
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
router.post("/", upload.single("profileImage"), serviceControllers.store);

// Editar perfil del asociado
router.get("/edit/:id", serviceControllers.edit);
router.put("/:id", serviceControllers.update);

// Borrar perfil de profesional asociado
router.delete("/:id", serviceControllers.destroy);

module.exports = router;
