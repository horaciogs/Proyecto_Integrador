const path = require('path');
const db = require('../../database/models');
const sequelize = db.sequelize;
const { Op } = require("sequelize");
const moment = require('moment');


const Products = db.Product;
//---------------------------
//Dentro del ProductsAPIController uso las dos forma de poder llamar a nuestros modelo
//----------------------------------
const ProductsAPIController = {
    'list': (req, res) => {
        db.Product.findAll({include: [{association: "categorys"}]})
        .then(Products => {
            let respuesta = {
                meta: {
                    status : 200,
                    total: Products.length,
                    url: 'api/Products'
                },
                data: Products
            }
                res.json(respuesta);
            })
    },

    'detail': async (req, res) => {
        let Products = await db.Product.findAll({include: [{association: "categorys"}, {association: "subcategorys"}]});
        let Product = Products.find(item => { return item.id == req.params.id})
        
        let respuesta = {
                    meta: {
                        status: 200,
                        total: Product.length,
                        url: '/api/Product/:id'
                    },
                    data: Product
                    }
                res.json(respuesta);
    },
}

module.exports = ProductsAPIController;