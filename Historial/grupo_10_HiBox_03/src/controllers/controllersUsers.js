const path = require ('path');
const { validationResult } = require('express-validator');
const bcryptjs = require ('bcryptjs');
const crypto = require('crypto');
const db = require ("../database/models");

const controllers = {
    users: async (req , res) => {
        let users = await db.User.findAll();
        res.render('../views/users/adminUsers', { users });
    }, 
    register: (req , res) => {
        res.render('../views/users/register');
    },
    
    processRegister: async (req , res) => {

        //validacion de los campos del formulario
        let resultValidation = validationResult(req);
        if(resultValidation.errors.length > 0) {
            return res.render('../views/users/register', {
                errors: resultValidation.mapped(),
                oldData: req.body
            });
        }
        
        //validacion de email repetido en la registracion
        let userInDb = await db.User.findOne({
            where: {
                email: req.body.email
            }
        });

        if(userInDb) {

            return res.render('../views/users/register', {
                errors: {
                    email: {
                        msg: 'El correo ya se encuentra registrado'
                    }
                },
                oldData: req.body
            });
        } else {

            let img="";
            if(req.file != undefined){
                img = "/images/users/" + req.file.filename
            } else {
                img = '/images/users/default-user.jpg'
            }

            await db.User.create({
                firstName: req.body.firstName,
                lastName: req.body.lastName,
                email: req.body.email,
                password: bcryptjs.hashSync(req.body.password, 10),
                //birthDate: userData.birthDate,
                userImage: img,
                userPrivilege: 0
            })

            //redirecciona al login
            res.render('../views/users/login');
        }
    },
    
    login: (req , res) => {
        res.render('../views/users/login');
    },

    processLogin: async (req,res) => {
        let userToLogin = await db.User.findOne({
            where: {
                email: req.body.email
            }
        });
        if(userToLogin) {
            if(bcryptjs.compareSync(req.body.password, userToLogin.password)) {
                delete userToLogin.password;
                req.session.userLogged = userToLogin;

                if (req.body.recuerdame) {
                    const token = crypto.randomBytes(64).toString('base64');
                    res.cookie('userToken', token, {maxAge: ((1000)*60)*60});
                    await db.TokenUser.create({
                        email: userToLogin.email,
                        token: token
                    });
                    
                }
                
                //login de user administrador o user comun
                if(userToLogin.userPrivilege) { 
                    return res.render('../views/users/profile', {user: userToLogin})
                } else {
                    let products = await db.Product.findAll({
                        include: [{association: "states"}]
                    });
                    return res.render('index', { products });
                }
            }
            return res.render('../views/users/login', {
                errors: {
                    password: {
                        msg: 'El password ingresado es incorrecto'
                    }
                },
                oldData: req.body
            });    
        }

        return res.render('../views/users/login', {
            errors: {
                email: {
                    msg: 'El usuario ingresado no se encuentra registrado'
                }
            }
        });
    
    },
    
    create: (req , res) => {
        res.render('../views/users/create');
        console.log("aquí estoy!")
    },    

    processCreate: async (req , res) => {

        //validacion de los campos del formulario
        let resultValidation = validationResult(req);
        if(resultValidation.errors.length > 0) {
            return res.render('../views/users/create', {
                errors: resultValidation.mapped(),
                oldData: req.body
            });
        }
        
        //validacion de email repetido en la registracion
        let userInDb = await db.User.findOne({
            where: {
                email: req.body.email
            }
        });

        if(userInDb) {

            return res.render('../views/users/create', {
                errors: {
                    email: {
                        msg: 'El correo ya se encuentra registrado'
                    }
                },
                oldData: req.body
            });
        } else {

            let img="";
            if(req.file != undefined){
                img = "/images/users/" + req.file.filename
            } else {
                img = '/images/users/default-user.jpg'
            }

            let privilege = 0;
            if(req.body.userPrivileges) {
                privilege = 1;
            }

            await db.User.create({
                firstName: req.body.firstName,
                lastName: req.body.lastName,
                email: req.body.email,
                password: bcryptjs.hashSync(req.body.password, 10),
                //birthDate: userData.birthDate,
                userImage: img,
                userPrivilege: privilege
            })

            let users = await db.User.findAll();
            res.render('../views/users/adminUsers', { users });
        }
    },

    profile: (req,res) => {
        res.render('../views/users/profile', { user: req.session.userLogged});
    },

    profileEdit: async (req,res) => {
        let user = await db.User.findByPk(req.params.id);
        res.render('../views/users/profileEdit', { user });
    },

    profileSave: async (req,res) => {        
        //validacion de los campos del formulario
        let userInDb = await db.User.findByPk(req.params.id);
        let resultValidation = validationResult(req);
        if(resultValidation.errors.length > 0) {
            return res.render('../views/users/profileEdit', {
                errors: resultValidation.mapped(),
                oldData: req.body,
                user: userInDb
            });
        }
    
                        let img="";
                        if(req.file != undefined){
                            img = "/images/users/" + req.file.filename
                        } else {
                            img = req.session.userLogged.userImage
                        }
                        
                        let privilege = 0;
                        if(req.body.userPrivileges) {
                            privilege = 1;
                            }

                        await db.User.update({
                            firstName: req.body.firstName,
                            lastName: req.body.lastName,
                            email: req.body.email,
                            password: bcryptjs.hashSync(req.body.password, 10),
                            //birthDate: userData.birthDate,
                            userImage: img,
                            userPrivilege: privilege
                        }, {
                            where: {
                                id: req.params.id
                            }
                        })
                        let user = await db.User.findByPk(req.params.id);
                        res.render(path.resolve(__dirname,'../views/users/profileEdit'), { user });
        
    },

    logout: async (req,res) => {
        await db.TokenUser.destroy({
            where: {
                email:  req.session.userLogged.email
            }
        });
        req.session.destroy();
        res.clearCookie('userToken');
        res.render('../views/users/login');
    },

    erase: async (req,res) => {
        await db.User.destroy({
            where: {
                id: req.params.id
            }
        });
        let users = await db.User.findAll();
        res.render('../views/users/adminUsers', { users });
    }
    
}

module.exports = controllers;