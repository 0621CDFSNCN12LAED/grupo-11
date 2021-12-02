const { User } = require("../database/models");

const userService = {
    filterByEmail: async (email) => {
        return await User.findOne({where: {email: email}})
    }
}

module.exports = userService