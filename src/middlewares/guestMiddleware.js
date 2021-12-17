function guestMiddleware(req, res, next) {
    if ( req.session.usuarioLogueado) {
        res.redirect("/user/profile")
    } next()
}

module.exports = guestMiddleware