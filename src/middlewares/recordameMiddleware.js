/* const db = require("../database/models");

function recordameMiddleware (req, res, next){
    next();

    let users
    db.User.findAll()
    .then (function (usuarios) {
      users = usuarios;
    })

    for (let i = 0; i < users.length; i++) {
      if (users[i].email == req.cookies.recordame) {
          let usuarioALoguearse = users[i];
          break;
        }
        req.session.usuarioLogueado = usuarioALoguearse;
        }
    if(req.cookies.recordame != undefined && req.session.usuarioLogueado == undefined){

module.exports = recordameMiddleware;
*/