const { User } = require("../../database/models");
const { findByEmail } = require("../../services/userService");

const usersApiController = {
  list: async (req, res) => {
    const usersList = await User.findAll({
      order: [["id", "ASC"]],
      offset: 0,
      limit: 2,
    });
    const users = usersList.map((user) => {
      return {
        id: user.id,
        name: user.userName,
        email: user.email,
        url: "http://localhost:3000/api/users/" + user.id,
      };
    });
    res.status(200).json({
      count: users.length,
      users,
    });
  },
  detail: async (req, res) => {
    const user = await Users.findByPk(req.params.id);

    if (user) {
      res.json({
        data: {
          id: user.id,
          userName: user.userName,
          birthday: user.birthday,
          email: user.email,
          image: "http://localhost:3000/public/images/users/" + user.image,
        },
        meta: {
          status: 200,
          url: "http://localhost:3000/api/users/" + user.id,
        },
      });
    } else {
      res.json({
        Problema: "No se encontró el usuario",
        meta: {
          status: 404,
        },
      });
    }
  },
};
module.exports = usersApiController;
