const serviceControllers = {
  create: (req, res) => {
    res.render("products/create");
  },
  save: (req, res) => {
    const body = req.body;

    const user = {
      name: req.body.name,
      email: req.body.email,
    };

    // Guardar la info que nos envian

    res.send(body);
  },

  edit: (req, res) => {
    // Entre las llaves se necesita enviar informacion desde el json en la base de datos, para asi editar
    res.render("products/edit", {});
  },
  editSave: (req, res) => {
    res.send("put");
  },

  delete: (req, res) => {
    res.render();
  },

  detail: (req, res) => {
    const idUser = req.params.id;

    res.render("products/detail", { idUser: idUser });
  },

  professionals: (req, res) => {
    res.render("professionals");
  },
};

module.exports = serviceControllers;
