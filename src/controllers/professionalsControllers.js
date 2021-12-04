let db = require("../database/models");

let professionalsController = {
  professionals: (req, res) => {
    db.Professional.findAll().then(function (x) {
      res.render("professionals", { professional: x });
    });
  },

  detail: (req, res) => {
    const professional = db.Professional.findByPk(req.params.id).then(function (x) {
      res.render("professionals", { professional: x });
    });
    if (null) {
      res.render("serviceP/detail", {});
    } else {
      res.send("No existe esta pagina");
    }
  },

  create: (req, res) => { db.Professional.create({
      name: "",
      birthday: "",
      email: "",
      userImage: "",
      password: "",
      rePassword: ""
    }).then(function (
      x
    ) {
      res.render("professionals", { professional: x });
    });
    res.render("serviceP/create");
  },
  store: (req, res) => {
    //
    res.redirect("/service/professionals");
  },

  edit: (req, res) => {
    //
    res.render("serviceP/edit", {});
  },
  update: (req, res) => {
    //
    res.redirect("/service/professionals");
  },

  destroy: (req, res) => {
    //
    res.redirect("/service/professionals");
  },
};


module.exports = professionalsController;
