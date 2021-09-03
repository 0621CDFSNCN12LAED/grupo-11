const mainControllers = {
  home: (req, res) => {
    res.render("home");
  },
  login: (req, res) => {
    res.render("login");
  },
  register: (req, res) => {
    res.render("register");
  },
  service: (req, res) => {
    res.render("service");
  },
};

module.exports = mainControllers;
