//requerimos el modulo de path
const path = require ("path");

//requerimos el modulo de express (terceros);
const express = require ("express");

// Pasar poder usar los métodos PUT y DELETE
const methodOverride =  require('method-override');

//adentro de app --> aplicacion express
const app = express(); 

//definimos el puerto una vez, para usarlo las veces necesarias
const port = 3030;

//requiero las rutas
const routesMain = require("./routes/routesMain");
const routesProduct = require("./routes/routesProduct");
const routesUsers = require("./routes/routesUsers");
const routesAdmin = require("./routes/routesAdmin");

//definimos las constantes de path
const pathPublic = path.resolve(__dirname, "../public");
const pathEngineViews = path.resolve(__dirname, "./views");

//mediante use le asigno la carpeta "public" al proyecto para alojar todos los elementos estaticos (imagenes / css)
app.use(express.static(pathPublic));
//tomar los datos con querystring
app.use(express.urlencoded({ extended: false }));
// Pasar poder pisar el method="POST" en el formulario por PUT y DELETE
app.use(methodOverride('_method'));

//mediante set indico el Engine a utilizar y la carpeta de views
app.set('view engine', 'ejs');
app.set('views', pathEngineViews);

//funcion para ejecutar el servidor en un puerto especifico (+ callback)
app.listen (port, () =>{
    console.log ("Estoy escuchando en el puerto ", port)
});

app.use ('/', routesMain);
app.use ('/users', routesUsers);
app.use ('/products', routesProduct);
app.use ('/admin', routesAdmin);

app.use((req,res,next) => {
    res.status(404).render('not-found')
});