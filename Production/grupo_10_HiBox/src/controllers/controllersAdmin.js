const path = require ("path");
const { validationResult } = require('express-validator');
const db = require ("../database/models");

const controllers = {
    product: async (req , res) => {
        let products = await db.Product.findAll();
        res.render('../views/admin/adminProduct', { products });
    }, 
    create: async (req , res) => {
        let sta = await db.State.findAll();
        let cat = await db.Category.findAll();
        let subCat = await db.SubCategory.findAll();
        res.render(path.resolve(__dirname,'../views/admin/productCreate'), {cat:cat, subCat:subCat, sta:sta});
    },
    show: async (req,res) =>{
        let miProducto = await db.Product.findByPk(req.params.id, {
            include: [{association: "states"}, {association: "categorys"}, {association: "subCategorys"}]
        });
        res.render(path.resolve(__dirname, '../views/admin/productDetail'), {miProducto})
    },
    save: async (req,res) =>{
           let img="";
            if(req.file != undefined){
                img = "/images/products/" + req.file.filename
            } else {
                img = '/images/products/default-image.jpg'
            }
            
            await db.Product.create({
                name: req.body.nombre,
                price: req.body.precio,
                priceBefore: req.body.precioAnterior,
                detail: req.body.detalle,
                productImage: img,
                stateId: req.body.estado,
                categoryId: req.body.categorias,
                subCategoryId: req.body.subCategoria 
            });
            let products = await db.Product.findAll();
            res.render (path.resolve(__dirname,'../views/admin/adminProduct'), { products });
    },
    edit: async (req,res)=>{
      
        let sta = await db.State.findAll();
        let cat = await db.Category.findAll();
        let subCat = await db.SubCategory.findAll();
        let productoEditar = await db.Product.findByPk(req.params.id, {
            include: [{association: "categorys"}, {association: "subCategorys"}, {association: "states"}]
        });
        
        res.render (path.resolve(__dirname,'../views/admin/productEdit'), {productoEditar, sta, cat, subCat});
    },
    update: async (req,res) =>{
        
        let productoEditar = await db.Product.findByPk(req.params.id, {
            include: [{association: "categorys"}, {association: "subCategorys"}, {association: "states"}]
        });
        
            let img="";
            if (req.file != undefined){
                img = "/images/products/" + req.file.filename
            } else {
                img = productoEditar.imageProduct;
            }

            await db.Product.update({
                name: req.body.nombre,
                price: req.body.precio,
                priceBefore: req.body.precioAnterior,
                detail: req.body.detalle,
                productImage: img,
                stateId: req.body.estado,
                categoryId: req.body.categorias,
                subCategoryId: req.body.subCategoria 
            }, {
                where: {
                    id: req.params.id
                }
            });

            let products = await db.Product.findAll();
            res.render (path.resolve(__dirname,'../views/admin/adminProduct'), { products });
    },
    erase: async (req,res) => {
        await db.Product.destroy({
            where: {
                id: req.params.id
            }
        });

        let products = await db.Product.findAll();
        res.render (path.resolve(__dirname,'../views/admin/adminProduct'), { products });
    }

};

module.exports = controllers;