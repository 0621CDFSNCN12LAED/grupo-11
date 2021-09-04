const mainControllers = {
  home: (req, res) => {
    res.render("home");
  },
  service: (req, res) => {
    res.render("service");
  },
  associate: (req, res) => {
    res.render("associate");
  },
  contact: (req, res) => {
    res.render("contact");
  },
  detail: (req, res) => {
    res.render("products/detail");
  },
  create: (req, res) => {
    res.render("products/create");
  },
  edit: (req, res) => {
    res.render("products/edit");
  },
  login: (req, res) => {
    res.render("users/login");
  },
  register: (req, res) => {
    res.render("users/register");
  },
  cart: (req, res) => {
    res.render("users/cart");
  },
};

module.exports = mainControllers;
