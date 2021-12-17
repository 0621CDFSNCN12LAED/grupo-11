 const db = require("../database/models");

async function  recordameMiddleware  (req, res, next){

    if(req.cookies.recordame != undefined && req.session.usuarioLogueado == undefined){
      const user = await db.User.findOne({
        where: {
          email: req.cookies.recordame
        }
      })

      req.session.usuarioLogueado = user;
    }

    next();
}
module.exports = recordameMiddleware;
