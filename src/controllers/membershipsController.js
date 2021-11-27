let db = require("../database/models");
const membershipsController = {
  select: function (req, res) {
    db.Membership.findAll().then(function (memberships) {
      return res.render("membresíasDisponibles", { memberships: memberships });
    });
  },
  seleccion: function (req, res) {
    db.Membership; /////////////////////////////////////////////////////////////Me quedé acá, 26-11-2021;
  },
};

module.exports = membershipsController;
