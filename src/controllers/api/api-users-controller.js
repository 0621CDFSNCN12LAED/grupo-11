const { User } = require("../../database/models");
const { findByEmail } = require("../../services/userService");


const usersApiController = {
  list: async (req, res) => {
    const usersList = await User.findAll({
            order: [[
                "id", "ASC"
            ]],
            offset: 0,
            limit: 2
        });
    const users = usersList.map((user) => {
            return {
                id: user.id,
                name: user.userName,
                email: user.email,
                url: "http://localhost:3000/api/users/" + user.id
             }
         })
    res.status(200).json({
            count: users.length,
            users
        })
    },
}

    module.exports = usersApiController;
