const bcrypt = require('bcryptjs');
const session = require('express-session')
const db = require("../database/models");


const userControllers = {
  cart: (req, res) => {
    res.render("users/cart");
  },

  login: (req, res) => {
    res.render("user/login");
  },
  userlogin: (req, res) => {
   let users = []
   db.User.findAll()
    .then (function (usuarios) {
     users.push(usuarios)
    })

    let usuarioALoguearse

    for (let i = 0; i < users.length; i++) {
      if (users[i].email == req.body.email) {
        if (bcrypt.compareSync(req.body.password, users[i].password)) {
          usuarioALoguearse = users[i];
          break;
        }
      };
    }

    if (usuarioALoguearse == undefined) {
      return res.redirect("login");
    } else {
      res.send("estas logueado")
    }

    req.session.usuarioLogueado = usuarioALoguearse;

    if(req.body.recordame != undefined) {
      res.cookie("recordame", users.email)
    }
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
