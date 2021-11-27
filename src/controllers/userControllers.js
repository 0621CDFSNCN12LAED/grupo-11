const userControllers = {
  cart: (req, res) => {
    res.render("user/cart");
  },

  login: (req, res) => {
    res.render("user/login");
  },
  userlogin: (req, res) => {
    res.redirect("");
  },

  register: (req, res) => {
    res.render("user/register");
  },
  userRegister: (req, res) => {
    res.redirect("");
  },
  //agregado para la parte de Membresías disponibles
  memberships: (req, res) => {
    res.render("user/memberships");
  },
};

module.exports = userControllers;
