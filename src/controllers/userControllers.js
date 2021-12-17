const bcrypt = require("bcryptjs");
const db = require("../database/models");
const session = require("express-session"); // Lo usamos como app.use(session)en app.js hace falta tenerlo aqui requerido?
const { validationResult, Result } = require("express-validator");

const userControllers = {
  cart: (req, res) => {
    // Carrito, proceso de comprar de la membresia
    res.render("users/cart");
  },

  login: (req, res) => {
    // Formulario para ingresar a una cuenta
    console.log(req.session.usuarioLogueado);
    res.render("user/login");
  },
  userlogin: async (req, res) => {
    // Proceso para poder ingresar a una cuenta
    const user = await db.User.findOne({
      where: {
        email: req.body.email
      }
    })

    if (!user) {
      return res.redirect("/user/login");
    }

    if (!bcrypt.compareSync(req.body.userPassword, user.userPassword)) {
      return res.redirect("/user/login");
    }

    req.session.usuarioLogueado = user;

    if (req.body.recordame != undefined) {
      res.cookie("recordame", user.email, { maxAge: 120000});
    }
    return res.redirect("/user/profile");
  },

  register: (req, res) => {
    // Formulario para registrar una cuenta
    res.render("user/register");
  },

  userRegister: async (req, res) => {
   // Proceso para almacenar nueva cuenta
    const resultValidation = validationResult(req);
    if (resultValidation.errors.length > 0) {
      return res.render("user/register", {
        errors1: resultValidation.array(),
        oldData: req.body,
      });
    }

    let passEncriptada = bcrypt.hashSync(req.body.userPassword, 10);

    await db.User.create({
      userName: req.body.userName,
      birthday: req.body.birthday,
      email: req.body.email,
      userImage: req.file ? req.file.filename : "",
      userPassword: passEncriptada,
    })

    res.redirect("/user/login");
  },
  userEdit: async (req, res) => {
    // Mostrar formulario para editar un perfil profesional
    const user = await db.User.findByPk(req.session.usuarioLogueado.id)
    res.render("user/editProfile", { user });
  },
  userUpdate: async (req, res) => {
    // Editar un perfil profesional
    const user = await db.User.findByPk(req.session.usuarioLogueado.id)
    let passEncriptada = bcrypt.hashSync(req.body.userPassword, 10);

    await db.User.update(
      {
        userName: req.body.userName,
        birthday: req.body.birthday,
        email: req.body.email,
        userImage: req.file ? req.file.filename : user.userImage,
        userPassword: req.body.userPassword == "" ? user.userPassword : passEncriptada,

      },
      {
        where: { id: req.session.usuarioLogueado.id},
      }
    );
    res.redirect("/user/profile");
  },
  userProfile: async (req,res) => {
    const user = await db.User.findByPk(req.session.usuarioLogueado.id)
    res.render("user/profile", { user })
  },
  userDestroy: async (req, res) => {
    // Borrar perfil profesional
    await db.User.destroy({
      where: { id: req.session.usuarioLogueado.id},
    });
    res.redirect("/");
  },
  logout: async (req, res) => {
    // Borrar perfil profesional
    req.session.destroy()
    res.redirect("/");
  },
};

module.exports = userControllers;
