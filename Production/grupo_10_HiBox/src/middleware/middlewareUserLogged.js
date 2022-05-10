const db = require("../database/models");

function middlewareUserLogged (req,res,next) {
    
    res.locals.isLogged = false;
    if(req.session && req.session.userLogged) {
        res.locals.isLogged = true;
        res.locals.userLogged = req.session.userLogged;
        return next();
    } else if (req.cookies.userToken) {
        db.TokenUser.findOne({
            where: {
                token: req.cookies.userToken
            }
        })
        .then((usertoken) => {
            if(usertoken) {
                db.User.findOne({
                    where: {
                        email: usertoken.email
                    }
                })
                .then((user) => {
                    if(user) {
                        delete user.password;
                        res.locals.userLogged = user;
                        req.session.userLogged = user;
                    }
                });
            }
        });
    }
    
    next();
    
}

module.exports = middlewareUserLogged;