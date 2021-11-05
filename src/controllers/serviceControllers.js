const sequelize =  require('sequelize')
const db = require('../database/models')

console.log(sequelize)

const serviceControllers = {
  professionals: (req, res) => {
    const professionals = db.professionals.findAll()
    res.render("professionals", {professionals : professionals});
  },

  detail: (req, res) => {
    //
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

module.exports = serviceControllers;
