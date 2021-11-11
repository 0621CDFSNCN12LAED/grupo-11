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
};

module.exports = userControllers;
