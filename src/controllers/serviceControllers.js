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

  send: (req, res) => {
    const id = req.body
    res.send(id);
  },
  delete: (req, res) => {
    res.render("products/delete");
  },
  editProducts: (req, res) => {
    res.render("products/editProducts");
  },
};

module.exports = serviceControllers;
