const express = require('express');
const path = require ('path');
const fs = require ('fs');
const { validationResult } = require('express-validator');
const bcryptjs = require ('bcryptjs');
const User = require ('../models/User');

const usersFilePath = path.join(__dirname, "../data/users.json");
const users = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'));

const productsFilePath = path.join(__dirname, '../data/products.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const controllers = {
    users: (req , res) => {
        res.render('../views/users/adminUsers', { users });
    }, 
    register: (req , res) => {
        res.render('../views/users/register');
    },
    
    processRegister: (req , res) => {

        //validacion de los campos del formulario
        let resultValidation = validationResult(req);
        if(resultValidation.errors.length > 0) {
            return res.render('../views/users/register', {
                errors: resultValidation.mapped(),
                oldData: req.body
            });
        }
        
        //validacion de email repetido en la registracion
        let userInDb = User.findByField('email',req.body.email);
        if(userInDb) {
            return res.render('../views/users/register', {
                errors: {
                    email: {
                        msg: 'El correo ya se encuentra registrado'
                    }
                },
                oldData: req.body
            });
        };

        //creacion de un nuevo user en la base de datos
        if (req.file != undefined){
            User.create (req.body, req.file.filename);
        } else {
            User.create(req.body, "/images/users/default-user.jpg");
        }
        //redirecciona al login
        res.render('users/login');
    },
    
    login: (req , res) => {
        res.render('../views/users/login');
    },

    processLogin: (req,res) => {
        let userToLogin = User.findByField('email',req.body.email);
        if(userToLogin) {
            if(bcryptjs.compareSync(req.body.password, userToLogin.password)) {
                delete userToLogin.password;
                req.session.userLogged = userToLogin;

                if (req.body.recuerdame) {
                    res.cookie('userEmail', req.body.email, {maxAge: ((1000)*60)*60});
                }
                
                //login de user administrador o user comun
                if(userToLogin.email == 'admin@adminuser.com') { 
                    return res.render('../views/users/profile', {user: userToLogin})
                } else {
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

    profile: (req,res) => {
        res.render('../views/users/profile', { user: req.session.userLogged});
    },

    profileEdit: (req,res) => {
        res.render('../views/users/profileEdit', { user: req.session.userLogged});
    },

    profileSave: (req,res) => {        
        //validacion de los campos del formulario
        let resultValidation = validationResult(req);
        if(resultValidation.errors.length > 0) {
            return res.render('../views/users/profileEdit', {
                errors: resultValidation.mapped(),
                oldData: req.body,
                user: userInDb
            });
        }
        let userInDb = User.findByField('id',req.params.id);
        if(userInDb) {
            return res.render('../views/users/profileEdit', {
                errors: {
                    email: {
                        msg: 'El correo ya se encuentra registrado'
                    }
                },
                oldData: req.body,
                user: userInDb
            });
        };
        if (req.file != undefined){
            User.edit (req.body, "/images/users/" + req.file.filename, userInDb);
        } else {
            User.edit (req.body, userInDb.img);
        }
       
        //redirecciona al profile editado
        res.render('users/profile');
    },


    logout: (req,res) => {
        res.clearCookie('userEmail');
        req.session.destroy();
        res.render('index', {products});
    }
}

module.exports = controllers;