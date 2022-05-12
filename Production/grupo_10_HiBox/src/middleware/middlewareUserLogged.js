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
        .then((userTokenInfo) => {
            if(userTokenInfo) {
                db.User.findOne({
                    where: {
                        email: userTokenInfo.email
                    }
                })
                .then((users) => {
                    if(users) {                      
                        delete users.password;
                        res.locals.isLogged = true;
                        res.locals.userLogged = users;
                        req.session.userLogged = users;
                    }
                });
            }
        });
    }
    
    next();
    
}

module.exports = middlewareUserLogged;