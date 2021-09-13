const mainControllers = {
  associate: (req, res) => {
    res.render("associate");
  },
  home: (req, res) => {
    res.render("home");
  },
  service: (req, res) => {
    res.render("service");
  },
};

module.exports = mainControllers;
