const db = require("../database/models");

const serviceControllers = {
  // Mostrar todos los profesionales
  professionals: async (req, res) => {
    const professionals = await db.Professional.findAll()
      res.render("professionals", { professional: professionals});
  },

  detail: async (req, res) => {
    // Mostrar detalle de un profesional
    const professional = await db.Professional.findByPk(req.params.id)

    if (professinal == null) {
      res.send("No existe este perfil de profesional");
    }

    res.render("professionals", { professional: professinal });

  },

  create: (req, res) => {
    // Mostrar formulario para crear un perfil profesional
    res.render("serviceP/create");
  },
  store: async (req, res) => {
    // Crear un perfil profesional

    await db.Professional.create({
      professionalName: req.body.professionalName,
      cuilCuit: req.body.cuilCuit,
      dni: req.body.dni,
      profession: req.body.profession,
      professionalImage: req.body.professionalImage,
      professionalLocation: req.body.professionalLocation,
      professionlDescription: req.body.professionlDescription,
      payMethod: req.body.payMethod,
      celphone: req.body.celphone,
    })
      res.redirect("/service/professionals");
  },

  edit: (req, res) => {
    // Mostrar formulario para editar un perfil profesional
    res.render("serviceP/edit", {});
  },
  update: async (req, res) => {
    // Editar un perfil profesional
    await db.professional.update(
      {
        professionalName: req.body.professionalName,
        profession: req.body.profession,
        professionalImage: req.body.professionalImage,
        professionalLocation: req.body.professionalLocation,
        professionlDescription: req.body.professionlDescription,
        payMethod: req.body.payMethod,
        celphone: req.body.celphone,
      },
      {
        where: { id: req.params.id },
      }
    );
    res.redirect("/service/professionals");
  },

  destroy: async (req, res) => {
    // Borrar perfil profesional
    await db.professional.destroy({
      where: { id: req.params.id },
    });
    res.redirect("/service/professionals");
  },
};

module.exports = serviceControllers;
