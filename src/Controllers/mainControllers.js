const mainControllers = {
    home:  (req, res) => {
        res.render('home')
      },
    service: (req, res) => {
        res.render('detailService')
      },
    login: (req, res) => {
        res.render('login')
      },
    register: (req, res) => {
        res.render('register')
      },


}

module.exports = mainControllers;