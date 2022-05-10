function middlewareUserLogged (req,res,next) {
    const User = require('../models/User');    
    let userNameLogin = req.cookies.userEmail;
    let userFromCookie = User.findByField('email', userNameLogin);

    if (userNameLogin) {
        req.session.userLogged = userFromCookie;
    }

    res.locals.isLogged = false;
    if(req.session && req.session.userLogged) {
        res.locals.isLogged = true;
        res.locals.userLogged = req.session.userLogged;
    }
    next();
}

module.exports = middlewareUserLogged;