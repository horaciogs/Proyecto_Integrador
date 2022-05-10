//llamo a express-validator en la variable body
const {body} = require('express-validator');

//validaciones para registro nuevo de usuario
const validations = [
    body('nombre').notEmpty().withMessage('Se debe completar el campo Nombre'),
    body('categorias').notEmpty().withMessage('Seleccionar'),
    body('subCategoria').notEmpty().withMessage('Seleccionar'),
    body('precio').notEmpty().withMessage('Completar'),
    body('precioAnterior').notEmpty().withMessage('Completar'),
    body('estado').notEmpty().withMessage('Seleccionar'),
    /*body('img').custom((value, {req}) => {
        let file = req.file;
        let acceptedExtensions = ['.jpg','.png','.gif'];
        let fileExtension = path.extname(file.originalname);
        if(!acceptedExtensions.includes(fileExtension)) {
            throw new Error(`Las extensiones permitidas son ${acceptedExtensions.join(', ')}`);
            }
        return true;
    }),*/
    body('detalle').notEmpty().withMessage('Se debe completar el campo Detalle')
]

module.exports = validations;