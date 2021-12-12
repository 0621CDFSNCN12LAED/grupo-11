const bcrypt = require("bcryptjs");
const session = require("express-session");
const db = require("../database/models");
const userService = require("../services/userService");

const userControllers = {
  cart: (req, res) => {
    res.render("users/cart");
  },

  login: (req, res) => {
    res.render("user/login");
  },
  userlogin: async (req, res) => {
    const user = await userService.filterByEmail(req.body.email);

    if (!user) {
      return res.redirect("/user/login");
    }
    console.log(user);
    if (!bcrypt.compareSync(req.body.password, user.user_password)) {
      return res.redirect("/user/login");
    }
    req.session.usuarioLogueado = user.id;
    console.log(req.session.usuarioLogueado);

    if (req.body.recordame != undefined) {
      res.cookie("recordame", user.email);
    }
    return res.redirect("/");
  },

  register: (req, res) => {
    res.render("user/register");
  },

  userRegister: (req, res) => {
    let passEncriptada = bcrypt.hashSync(req.body.password, 10);

    db.User.create({
      user_name: req.body.name,
      birthday: req.body.birthday,
      email: req.body.email,
      user_image: req.body.image,
      user_password: passEncriptada,
    }),
      //
      res.redirect("/user/login");
  },
  //agregado para la parte de Membresías disponibles
  memberships: (req, res) => {
    res.render("/user/memberships");
  },
};

module.exports = userControllers;
