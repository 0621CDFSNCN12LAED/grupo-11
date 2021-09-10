const serviceControllers = {
  create: (req, res) => {
    res.render("products/create");
  },
  detail: (req, res) => {
    res.render("products/detail");
  },
  edit: (req, res) => {
    res.render("products/edit");
  },
};

module.exports = serviceControllers;
