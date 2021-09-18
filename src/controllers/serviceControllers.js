const professionals = require("../js/profesionals");

const serviceControllers = {
  professionals: (req, res) => {
    const profesionals = professionals.findAll();
    res.render("professionals", { professionals: profesionals });
  },

  detail: (req, res) => {
    const professional = professionals.findOneById(req.params.id);
    if (professional) {
      res.render("serviceP/detail", { professional: professional });
    } else {
      res.send("No existe esta pagina");
    }
  },

  create: (req, res) => {
    res.render("serviceP/create");
  },
  store: (req, res) => {
    professionals.createOne(req.body, req.file);
    res.redirect("/service/professionals");
  },

  edit: (req, res) => {
    const professional = professionals.findOneById(req.params.id);
    res.render("serviceP/edit", { professional: professional });
  },
  update: (req, res) => {
    professionals.editOne(req.params.id, req.body, req.file);
    res.redirect("/service/professionals");
  },

  destroy: (req, res) => {
    professionals.destroyOne(req.params.id);
    res.redirect("/service/professionals");
  },
};

module.exports = serviceControllers;
