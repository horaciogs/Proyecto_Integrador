//requiero la función Router del objeto express
const {Router} = require ('express');
const multer = require('multer');
const path = require('path');

//guardo la función Router en la constante routes
const routes = Router();

//requiero el middleware para usuarios logueados
const guestMiddleware = require('../middleware/guestMiddleware');

//requiero el middleware para cuando no estou logueado y quiero ver el perfil de usuario
const authMiddleware = require('../middleware/authMiddleware');

//requiero los controladores
const controllersUsers = require('../controllers/controllersUsers');

//requiero el middleware para validaciones
const validations = require('../middleware/middlewareUserRegValidation');
const validationsProfile = require('../middleware/middlewareUserEditProfileValidation');

//*** Configura el storage (destination, filename) ***/
var storage = multer.diskStorage({
    destination:function(req,file,cb){
        cb(null, path.resolve(__dirname, '../../public/images/users'));
    },
    filename: function(req,file,cb){
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
    }
});
//variable upload con multer
var upload = multer ({storage});

//genero el listado de usuarios
routes.get ("/adminUsers", authMiddleware, controllersUsers.users);

//realizo las renderizaciones de users
routes.get ("/register", guestMiddleware, controllersUsers.register);
//tomo los datos de registro para uno nuevo con las validaciones
routes.post ("/register", upload.single('img'), validations, controllersUsers.processRegister);

//render al login
routes.get ("/login", guestMiddleware, controllersUsers.login);
//tomo los datos para un nuevo pedido de login
routes.post ("/login", controllersUsers.processLogin);

//render al profile
routes.get ("/profile", authMiddleware, controllersUsers.profile);
//get a la edición de usuario
routes.get ("/profile/edit/:id", authMiddleware, controllersUsers.profileEdit);
//tomo los datos para editarlo
routes.put ("/profile/edit/:id", upload.single('img'), validationsProfile, controllersUsers.profileSave);

//situaciones de login
routes.get ("/logout",controllersUsers.logout);

module.exports = routes;