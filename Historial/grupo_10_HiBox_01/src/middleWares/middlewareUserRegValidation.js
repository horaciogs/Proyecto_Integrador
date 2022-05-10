const path = require('path');
//llamo a express-validator en la variable body
const {body} = require('express-validator');

//validaciones para registro nuevo de usuario
const validations = [
    body('firstName').notEmpty().withMessage('Se debe completar el campo Nombre'),
    body('lastName').notEmpty().withMessage('Se debe completar el campo Apellido'),
    body('email').notEmpty().withMessage('Se debe completar el campo email').bail().isEmail().withMessage('Debe ser un formato de correo válido ej: hola@gmail.com'),
    body('psw').notEmpty().withMessage('Se debe completar el password'),
    body('confirmPsw').notEmpty().withMessage('Se debe insertar nuevamente el password').bail().custom((value, {req}) => {
        if(req.body.psw !== req.body.confirmPsw) {
            throw new Error ('No es igual a la contraseña ingresada, valide nuevamente');
        }
        return true;
    }),
    body('birthDate').notEmpty().withMessage('Se debe completar el campo con la fecha de nacimiento'),
    body('img').custom((value, {req}) => {
        let file = req.file;
        let acceptedExtensions = ['.jpg','.png','.gif'];
        if(!file) {
            throw new Error ('Debe seleccionar una imagen a subir');
        } else {
            let fileExtension = path.extname(file.originalname);
            if(!acceptedExtensions.includes(fileExtension)) {
                throw new Error(`Las extensiones permitidas son ${acceptedExtensions.join(', ')}`);
            }
        }
        return true;
    })
]

module.exports = validations;