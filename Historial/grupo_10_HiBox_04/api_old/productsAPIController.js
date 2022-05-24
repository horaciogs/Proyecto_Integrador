const path = require('path');
const db = require('../src/database/models');
const sequelize = db.sequelize;
const { Op } = require("sequelize");
const moment = require('moment');


        listProducts: async (req, res) => {
            let products = await db.Product.findAll({ include: ["category"] });
            let categories = await db.Category.findAll();

            let countProd = products.length;
            let productos = products.map((product) => {
                // let fixPrice = toThousand(Math.trunc(product.price))
                return {
                    id: product.id,
                    name: product.name,
                    category_id: product.category_id,
                    detail: product.detail,
                    price: product.price,    //fixPrice,
                    detail_id: `/api/products/${product.id}`,
                };
            });
            // array dinamico de obj por categoria
            function ObjCategory(name, cant) {
                this.name = name;
                this.cant = cant;
            }
            let arrayCategories = []
            categories.map((cat)=>{
                let newCat = new ObjCategory(cat.name, 0)
                arrayCategories.push(newCat)
            })

            for (let prod of productos) {
                for (let cat of arrayCategories) {
                if (prod.category === cat.name) {
                        cat.cant = cat.cant + 1;
                    }
                };
            };

            res.json({
                meta: {
                    status: 200,
                    url: `/api/products/`,
                    count: countProd,
                    countByCategory: arrayCategories
                },
                data: {
                    productsList: productos
                },
            });

        oneProduct: async (req, res) => {
            try {
                const product = await db.Product.findByPk(req.params.id, {include: ["category"] });
                // let fixPrice = toThousand(Math.trunc(product.price))
                res.json({
                    meta: {
                        status: 200,
                        url: `/api/users/${product.id}`,
                    },
                    data: {
                        id: product.id,
                        name: product.name,
                        price: product.price,
                        priceBefore: product.priceBefore,
                        category_id: product.categoryId,
                        images: JSON.parse(product.productImage),
                        detail: product.detail,
                        urlFirstImg: `/images/products/${
                            JSON.parse(product.productImage)[0]
                        }`,
                    },
                });
            } catch (error) {
                res.json({ error: error });
            }
        }
}

module.exports = productsAPIController;