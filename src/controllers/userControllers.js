const bcrypt = require('bcryptjs');
const session = require('express-session')
const db = require("../database/models");
 
let passEncriptada = bcrypt.hashSync;


const userControllers = {
  cart: (req, res) => {
    res.render("users/cart");
  },

  login: (req, res) => {
    let user = db.User.findAll().then;
    for (let i = 0; i < user.length; i++) {
      if (users[i].email == req.body.email) {
        if (bcrypt.compareSync(req.body.password, passEncriptada)) { 
          let usuarioALoguearse = user[i];
          break;
        }
      };
      
    }
    if (usuarioALoguearse == undefined) {
      return res.redirect("user/login");
    }
    req.session.usuarioLogueado = usuarioALoguearse;
    res.redirect("/home");
    res.render("user/login");
  },
  userlogin: (req, res) => {
    res.redirect("");
  },

  register: (req, res) => {
    res.render("user/register");
  },
  
  userRegister: (req, res) => {
    let passEncriptada = bcrypt.hashSync(rec.body.password, 10);

     db.User.create({
      name: req.body.name,
      birthday: req.body.birthday,
      email: req.body.email,
      userImage: req.body.image,
      password: passEncriptada,
      rePassword: passEncriptada
    }),
    //let check = bcrypt.compareSync(rec.body.password, passEncriptada);
    res.redirect("/home");
  },
  //agregado para la parte de Membresías disponibles
  memberships: (req, res) => {
    res.render("/user/memberships");
  },
};

module.exports = userControllers;
