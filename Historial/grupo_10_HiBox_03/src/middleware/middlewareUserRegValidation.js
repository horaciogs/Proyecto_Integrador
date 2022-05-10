//llamo a express-validator en la variable body
const {body} = require('express-validator');

//validaciones para registro nuevo de usuario
const validations = [
    body('firstName').notEmpty().withMessage('Se debe completar el campo Nombre'),
    body('lastName').notEmpty().withMessage('Se debe completar el campo Apellido'),
    body('email').notEmpty().withMessage('Se debe completar el campo email').bail().isEmail().withMessage('Debe ser un formato de correo válido ej: hola@gmail.com'),
    body('password').notEmpty().withMessage('Se debe completar el password').bail().isLength({min:6}).withMessage('Debe tener un mínimo de 6 caracteres').bail().isLength({max:15}).withMessage('El máximo de caracteres es 15'),
    body('confirmPsw').notEmpty().withMessage('Se debe insertar nuevamente el password').bail().custom((value, {req}) => {
        if(req.body.password !== req.body.confirmPsw) {
            throw new Error ('No es igual a la contraseña ingresada, valide nuevamente');
        }
        return true;
    }),
    //body('birthDate').notEmpty().withMessage('Se debe completar el campo con la fecha de nacimiento')
]

module.exports = validations;