const userControllers = {
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

module.exports = userControllers;

/* Esto no funciona, ignorar para un futuro buscar solucion y tener todo mas prolijo y ordenado */
