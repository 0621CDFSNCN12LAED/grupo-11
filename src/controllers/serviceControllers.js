<<<<<<< HEAD
const db = require("../database/models");
=======
//index.js va en este require????
const db = require("../database/models/index.js");
>>>>>>> 27c9bf6d631a6c48be1e8584ca86af425cbde5cd

const serviceControllers = {
  professionals: (req, res) => {
    db.Professional.findAll().then(function (x) {
      res.render("professionals", { professional: x });
    });
  },

  detail: (req, res) => {
    const professional = db.Professional.findByPk(req.params.id).then(function (
      x
    ) {
      res.render("professionals", { professional: x });
    });
    if (null) {
      res.render("serviceP/detail", {});
    } else {
      res.send("No existe esta pagina");
    }
  },

  create: (req, res) => {
    res.render("serviceP/create");
  },
  store: (req, res) => {
    db.Professional.create({
      name: req.body.name,
      cuilCuit: req.body.cuilCuit,
      dni: req.body.dni,
      profession: req.body.profession,
      profileImage: req.body.profileImage,
      location: req.body.location,
      description: req.body.description,
      payMethod: req.body.payMethod,
      celphone: req.body.celphone,
      email: req.body.email,
    }).then(function (x) {
      res.redirect("/service/professionals");
    });
  },

  edit: (req, res) => {
    //
    res.render("serviceP/edit", {});
  },
  update: (req, res) => {
    db.professional.update(
      {
        name: req.body.name,
        cuilCuit: req.body.cuilCuit,
        dni: req.body.dni,
        profession: req.body.profession,
        profileImage: req.body.profileImage,
        location: req.body.location,
        description: req.body.description,
        payMethod: req.body.payMethod,
        celphone: req.body.celphone,
        email: req.body.email,
      },
      {
        where: { id: req.params.id },
      }
    );
    res.redirect("/service/professionals");
  },

  destroy: (req, res) => {
    db.professional.destroy({
      where: { id: req.params.id },
    });
    res.redirect("/service/professionals");
  },
};

module.exports = serviceControllers;
