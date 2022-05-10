function authMiddleware (req, res, next) {
    if(!req.session.userLogged) {
        return res.render('../views/users/login');
    }
    next();
}

module.exports = authMiddleware;