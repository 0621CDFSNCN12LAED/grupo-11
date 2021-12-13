const bcrypt = require("bcryptjs");
const db = require("../database/models");
const userService = require("../services/userService");
const session = require("express-session"); // Lo usamos como app.use(session)en app.js hace falta tenerlo aqui requerido?
const { validationResult } = require("express-validator");


const userControllers = {
  cart: (req, res) => {
    // Carrito, proceso de comprar de la membresia
    res.render("users/cart");
  },

  login: (req, res) => {
    // Formulario para ingresar a una cuenta
    res.render("user/login");
  },
  userlogin: async (req, res) => {
    // Proceso para poder ingresar a una cuenta
    const user = await userService.filterByEmail(req.body.email);

    if (!user) {
      return res.redirect("/user/login");
    }
    console.log(user);
    if (!bcrypt.compareSync(req.body.password, user.userPassword)) {
      return res.redirect("/user/login");
    }
    req.session.usuarioLogueado = user.id;

    if (req.body.recordame != undefined) {
      res.cookie("recordame", user.email);
    }
    return res.redirect("/");
  },

  register: (req, res) => {
    // Formulario para registrar una cuenta
    res.render("user/register");
  },

  userRegister: (req, res) => {
    // Proceso para almacenar nueva cuenta
    let passEncriptada = bcrypt.hashSync(req.body.password, 10);

    db.User.create({
      userName: req.body.name,
      birthday: req.body.birthday,
      email: req.body.email,
      userImage: req.body.image,
      userPassword: passEncriptada,
    }),

    res.redirect("/user/login");
  },
  processRegister: (req, res) => {
    // Ni idea? Atte: Elias
    const resultValidation = validationResult(req);
    return res.send(resultValidation);
    if (resultValidation.errors.length > 0) {
      return res.render("register", {
        errors: resultValidation.mapped(),
        oldData: req.body,
      });
    }
    // Tal vez pueda ser un render, verificar!!
    // return res.send("Las validaciones están OK!")
  },
};

module.exports = userControllers;
