const path = require('path');
const db = require('../../database/models');
const sequelize = db.sequelize;
const { Op } = require("sequelize");
const moment = require('moment');


//Aqui tienen otra forma de llamar a cada uno de los modelos
const Users = db.User;



const UsersAPIController = {
    'list': (req, res) => {
        db.User.findAll({
        })
        .then(Users => {
            let respuesta = {
                meta: {
                    status : 200,
                    total: Users.length,
                    url: 'api/Users'
                },
                data: Users
            }
                res.json(respuesta);
            })
    },

    'detail': (req, res) => {
        db.User.findByPk(req.params.id)
            .then(User => {
                let respuesta = {
                    meta: {
                        status: 200,
                        total: User.length,
                        url: '/api/User/:id'
                    },
                    data: User
                }
                res.json(respuesta);
            });
    },
}

module.exports = UsersAPIController;