const path = require("path");
const db = require("../database/models");

const controllers = {
    index: async (req , res) => {
        let cat = await db.Category.findAll();
        let subCat = await db.SubCategory.findAll();
        let sta = await db.State.findAll();
        let products = await db.Product.findAll();

        res.render('../views/products/products', { products, cat, subCat, sta});
    },
    
    indexFormulario: async (req , res) => {
        let cat = await db.Category.findAll();
        let subCat = await db.SubCategory.findAll();
        let sta = await db.State.findAll();

        if(req.query.subCategoria && req.query.categorias) {
            let products = await db.Product.findAll({
                where: {
                    categoryId: req.query.categorias,
                    subCategoryId: req.query.subCategoria
                }
            });
            res.render('../views/products/products', { products, cat, subCat, sta });

        } else if (req.query.categorias) {
            let products = await db.Product.findAll({
                where: {
                    categoryId: req.query.categorias
                }
            });
            res.render('../views/products/products', { products, cat, subCat, sta });
        
        } else if (req.query.subCategoria) {
            let products = await db.Product.findAll({
                where: {
                    subCategoryId: req.query.subCategoria
                }
            });
            res.render('../views/products/products', { products, cat, subCat, sta });
        
        } else {
            let products = await db.Product.findAll();
            res.render('../views/products/products', { products, cat, subCat, sta });
        }    
    },

    show: async (req,res) =>{
        let products = await db.Product.findAll({
            include: [{association: "states"}]
        });
        let miProducto = await db.Product.findByPk(req.params.id, {
            include: [{association: "states"}, {association: "categorys"}, {association: "subcategorys"}]
        });
        res.render(path.resolve(__dirname, '../views/products/productDetail'), { products , miProducto })
    },

    cart: async (req , res) => {
        let productUser = await db.User.findByPk(req.session.userLogged.id, {include: [{association: "products"}]});
        let products = await db.Product.findAll({
            include: [{association: "states"}, {association: "categorys"}, {association: "subcategorys"}]
        });
        res.render('../views/products/productCart', { products, productUser });
    },

    cartAddItem: async (req,res) => {
        await db.ProductCart.create({
            userId: req.session.userLogged.id,
            productId: req.params.id 
        });
        let productUser = await db.User.findByPk(req.session.userLogged.id, {include: [{association: "products"}]});
        let products = await db.Product.findAll({
            include: [{association: "states"}, {association: "categorys"}, {association: "subcategorys"}]
        });
        res.render('../views/products/productCart', { products, productUser });
    },

    eraseCart: async (req,res) => {
        await db.ProductCart.destroy({
            where: {
                userId: req.session.userLogged.id,
                productId: req.params.id
            }
        });
        
        let productUser = await db.User.findByPk(req.session.userLogged.id, {include: [{association: "products"}]});
        let products = await db.Product.findAll({
            include: [{association: "states"}, {association: "categorys"}, {association: "subcategorys"}]
        });
        res.render('../views/products/productCart', { products, productUser });
    },

    eraseCartAll: async (req,res) => {
        await db.ProductCart.destroy({
            where: {
                userId: req.params.id
            }
        });
        
        let productUser = await db.User.findByPk(req.session.userLogged.id, {include: [{association: "products"}]});
        let products = await db.Product.findAll({
            include: [{association: "states"}, {association: "categorys"}, {association: "subcategorys"}]
        });
        res.render('../views/products/productCart', { products, productUser });
    },

    listarGastronomia: async (req,res) =>{
        let products = await db.Product.findAll({
            include: [{association: "states"}, {association: "categorys"}, {association: "subcategorys"}]
        });
        res.render(path.resolve(__dirname, '../views/products/gastronomia'), { products })
    },

    listarEntretenimiento: async (req,res) =>{
        let products = await db.Product.findAll({
            include: [{association: "states"}, {association: "categorys"}, {association: "subcategorys"}]
        });
        res.render(path.resolve(__dirname, '../views/products/entretenimiento'), { products })
    },

    listarAventura: async (req,res) =>{
        let products = await db.Product.findAll({
            include: [{association: "states"}, {association: "categorys"}, {association: "subcategorys"}]
        });
        res.render(path.resolve(__dirname, '../views/products/aventura'), { products })
    }
}

module.exports = controllers;