const path = require('path');
const db = require('../../database/models');
const sequelize = db.sequelize;
const { Op } = require("sequelize");
const moment = require('moment');


//Aqui tienen otra forma de llamar a cada uno de los modelos

// const Categorys = db.Category;

//---------------------------
//Dentro del actorsAPIController uso las dos forma de poder llamar a nuestros modelo
//----------------------------------
const categorysAPIController = {
    'list': (req, res) => {
        db.Category.findAll()
        .then(Categorys => {
            let respuesta = {
                meta: {
                    status : 200,
                    total: Categorys.length,
                    url: 'api/Categorys'
                },
                data: Categorys
            }
                res.json(respuesta);
            })
    },
    
    'detail': (req, res) => {
        db.Category.findByPk(req.params.id)
            .then(Category => {
                let respuesta = {
                    meta: {
                        status: 200,
                        total: Category.length,
                        url: '/api/Category/:id'
                    },
                    data: Category
                }
                res.json(respuesta);
            });
    },
}

module.exports = categorysAPIController;