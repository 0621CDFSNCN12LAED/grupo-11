const { Users_professionals } = require("../database/models");

const professionalsService = {
    filterByEmail: async (email) => {
        return await User.findOne({where: {email: email}})
    }
}

module.exports = professionalsService