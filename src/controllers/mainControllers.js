const mainControllers = {
  associate: (req, res) => {
    res.render("associate");
  },
  home: (req, res) => {
    res.render("home");
  },
  professionals: (req, res) => {
    res.render("professionals");
  },
  service: (req, res) => {
    res.render("service");
  },
};

module.exports = mainControllers;
