function guestMiddleware (req, res, next) {
    if(req.session.userLogged) {
        return res.render('../views/users/profile', {user: req.session.userLogged});
    }
    next();
}

module.exports = guestMiddleware;