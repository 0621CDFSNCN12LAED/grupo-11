const bcrypt = require("bcryptjs");
const db = require("../database/models");
const userService = require("../services/userService");
const session = require("express-session"); // Lo usamos como app.use(session)en app.js hace falta tenerlo aqui requerido?
const { validationResult, Result } = require("express-validator");

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
  userProfile: async (req,res) => {
    const user = await db.User.findByPk(req.params.id)
    res.render("user/profile", { user : user})
  },
  userEdit: async (req, res) => {
    // Mostrar formulario para editar un perfil profesional
    const user = await db.User.findByPk(req.params.id)
    res.render("user/editProfile", { user : user});
  },
  userUpdate: async (req, res) => {
    // Editar un perfil profesional
    await db.professional.update(
      {
        professionalName: req.body.professionalName,
        profession: req.body.profession,
        professionalImage: req.body.professionalImage,
        professionalLocation: req.body.professionalLocation,
        professionlDescription: req.body.professionlDescription,
        payMethod: req.body.payMethod,
        celphone: req.body.celphone,
      },
      {
        where: { id: req.params.id },
      }
    );
    res.redirect("/service/professionals");
  },
};

module.exports = userControllers;
