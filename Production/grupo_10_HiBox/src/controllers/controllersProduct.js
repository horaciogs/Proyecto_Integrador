const path = require("path");
const db = require("../database/models");

const controllers = {
    index: async (req , res) => {
        let products = await db.Product.findAll({
            include: [{association: "states"}]
        });
        res.render('../views/products/products', { products });
    },

    show: async (req,res) =>{
        let products = await db.Product.findAll({
            include: [{association: "states"}]
        });
        let miProducto = await db.Product.findByPk(req.params.id, {
            include: [{association: "states"}, {association: "categorys"}, {association: "subCategorys"}]
        });
        res.render(path.resolve(__dirname, '../views/products/productDetail'), { products , miProducto })
    },

    cart: async (req , res) => {
        let products = await db.Product.findAll();
        res.render('../views/products/productCart', { products });
    },
}

module.exports = controllers;