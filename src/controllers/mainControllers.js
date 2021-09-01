const mainControllers = {
    home:  (req, res) => {
        res.sendFile(path.join(__dirname, "views/home.html"));
      },
    service: (req, res) => {
        res.sendFile(path.join(__dirname, "views/detailService.html"));
      },
    login: (req, res) => {
        res.sendFile(path.join(__dirname, "views/login.html"));
      },
    register: (req, res) => {
        res.sendFile(path.join(__dirname, "views/register.html"));
      },


}

module.exports = mainControllers;