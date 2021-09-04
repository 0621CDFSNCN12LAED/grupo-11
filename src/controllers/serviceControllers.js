const serviceControllers = {
  serviceDetail: (req, res) => {
    res.render("products/serviceDetail");
  },
  edit: (req, res) => {
    res.render("products/edit");
  },
  create: (req, res) => {
    res.render("products/create");
  },
};

module.exports = serviceControllers;

/* Esto no funciona, ignorar para un futuro buscar solucion y tener todo mas prolijo y ordenado */
