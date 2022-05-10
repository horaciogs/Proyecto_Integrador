const express = require('express');
const path = require ('path');
const fs = require ('fs');
const { validationResult } = require('express-validator');

const usersFilePath = path.join(__dirname, "../data/users.json");
const users = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'));

const controllers = {
    register: (req , res) => {
        res.render('../views/users/register');
    },
    processRegister: (req , res) => {
        const resultValidation = validationResult(req);
        if(resultValidation.errors.length > 0) {
            res.render('../views/users/register', {
                errors: resultValidation.mapped(),
                oldData: req.body
            });
        } else {
        let ultimoUser = users.pop();
        users.push (ultimoUser);
        let nuevoUser = {
            id: ultimoUser.id +1,
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            psw: req.body.psw,
            birthDate: req.body.birthDate,
            img: "/images/users/" + req.file.filename
        };
        users.push(nuevoUser);
        let nuevoUsuarioGuardar = JSON.stringify( users, null , 2);
        fs.writeFileSync(path.resolve(__dirname, "../data/users.json"), nuevoUsuarioGuardar);
        res.redirect('../users/login');
        }
    },
    login: (req , res) => {
        res.render('../views/users/login');
    }
}

module.exports = controllers;