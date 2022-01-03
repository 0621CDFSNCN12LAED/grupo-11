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
  memberships: (req, res) => {
    res.render("memberships");
  }
};

module.exports = mainControllers;
