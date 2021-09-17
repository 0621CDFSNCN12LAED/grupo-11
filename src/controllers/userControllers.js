const userControllers = {
  cart: (req, res) => {
    res.render("user/cart");
  },

  login: (req, res) => {
    res.render("user/login");
  },
  userlogin: (req, res) => {
    res.render("user/login");
  },

  register: (req, res) => {
    res.render("user/register");
  },
  userRegister: (req, res) => {
    res.render("user/login");
  },
};

module.exports = userControllers;
