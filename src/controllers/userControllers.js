const userControllers = {
  cart: (req, res) => {
    res.render("users/cart");
  },

  login: (req, res) => {
    res.render("users/login");
  },
  userlogin: (req, res) => {
    res.render("users/login");
  },

  register: (req, res) => {
    res.render("users/register");
  },
  userRegister: (req, res) => {
    res.render("users/login");
  },
};

module.exports = userControllers;
