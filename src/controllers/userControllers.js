const bcrypt = require('bcryptjs');
const session = require('express-session')
const db = require("../database/models");
const userService = require("../services/userService")


const userControllers = {
  cart: (req, res) => {
    res.render("users/cart");
  },

  login: (req, res) => {
    res.render("user/login");
  },
  userlogin: (req, res) => {

    const user = await userService.filterByEmail(req.body.email)

    if (!user) {
      res.redirect("/login")
    }

    if (!req.body.password == user.user_password) {
      res.redirect("/login")
    }

    res.redirect("/")

    /*req.session.usuarioLogueado = "si";
    console.log(req.session.usuarioLogueado);

     if(req.body.recordame != undefined) {
      res.cookie("recordame", users.email)
    }*/
  },

  register: (req, res) => {
    res.render("user/register");
  },

  userRegister: (req, res) => {
    let passEncriptada = bcrypt.hashSync(req.body.password, 10);

     db.User.create({
      name: req.body.name,
      birthday: req.body.birthday,
      email: req.body.email,
      userImage: req.body.image,
      password: passEncriptada,
      rePassword: passEncriptada
    }),
    //let check = bcrypt.compareSync(req.body.password, passEncriptada);
    res.redirect("/home");
  },
  //agregado para la parte de Membresías disponibles
  memberships: (req, res) => {
    res.render("/user/memberships");
  },
};

module.exports = userControllers;
