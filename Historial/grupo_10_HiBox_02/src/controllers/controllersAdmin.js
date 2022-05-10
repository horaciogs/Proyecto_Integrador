const { create } = require('domain');
const express = require('express');
const fs = require('fs');
const path = require ("path");
const { validationResult } = require('express-validator');

const productsFilePath = path.join(__dirname, "../data/products.json");
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const controllers = {
    product: (req , res) => {
        res.render('../views/admin/adminProduct', { products });
    }, 
    create: (req , res) => {
        res.render('../views/admin/productCreate');
    },
    show: (req,res) =>{
        let miProducto;
        products.forEach(producto => {
            if(producto.id == req.params.id){
                miProducto = producto;
            }
        });
        res.render(path.resolve(__dirname, '../views/admin/productDetail'), {miProducto})
    },
    save: (req,res) =>{
        let resultValidation = validationResult(req);
        if(resultValidation.errors.length > 0) {
            res.render('../views/admin/productCreate', {
                errors: resultValidation.mapped(),
                oldData: req.body
            });
        } else {
            let ultimoProducto = products.pop();
            products.push (ultimoProducto);
            //pregunto si adjunta imagen, sino adjunto la default
            let img
            if(req.file != undefined){
                img = "/images/products/" + req.file.filename
            } else {
                img = '/images/products/default-image.jpg'
            }
            
            let nuevoProducto = {
                id: ultimoProducto.id +1,
                /*nombre: req.body.nombre,
                categoria: req.body.categoria,
                subcategoria: req.body.subcategoria,
                precio: req.body.precio,
                precioAnterior: req.body.precioAnterior,
                detalle: req.body.detalle,
                img: "/images/products/" + req.file.filename,
                estado: req.body.estado   */
                ...req.body,
                img
            }
            nuevoProducto.precio = parseFloat(nuevoProducto.precio);
            nuevoProducto.precioAnterior = parseFloat(nuevoProducto.precioAnterior);
            products.push(nuevoProducto);
            let nuevoProductoGuardar = JSON.stringify( products, null , 2);
            fs.writeFileSync(path.resolve(__dirname, "../data/products.json"), nuevoProductoGuardar);
            res.redirect('../admin/adminProduct');
        }
    },
    edit: (req,res)=>{
        const modoId = req.params.id;
        let productoEditar = products.find( producto => producto.id == modoId);
        res.render (path.resolve(__dirname,'../views/admin/productEdit'), {productoEditar});
    },
    update: (req,res) =>{
        let id = req.params.id;
        let productToEdit = products.find (product => product.id == id);
        let resultValidation = validationResult(req);
        if(resultValidation.errors.length > 0) {
            res.render('../views/admin/productEdit', {
                errors: resultValidation.mapped(),
                oldData: req.body,
                productoEditar: productToEdit
            });
        } else {
            let img
            if (req.file != undefined){
                img = "/images/products/" + req.file.filename
            } else {
                img = "/images/products/default-image.jpg"
            }

            productToEdit = {
                id: productToEdit.id,
                ...req.body,
                img
            };
            productToEdit.precio = parseFloat(productToEdit.precio);
            productToEdit.precioAnterior = parseFloat(productToEdit.precioAnterior);
            let newProducts = products.map (product => {
            if (product.id == productToEdit.id){
                return product = {...productToEdit};
                }
            return product;
            });
            fs.writeFileSync (productsFilePath, JSON.stringify (newProducts, null, ' '));
            res.redirect('/admin/adminProduct');
            /* req.body.id = req.params.id;
            req.body.img = req.file ? "/images/products/" + req.file.filename : req.body.oldImagen;
            let productosUpdate = products.map(producto =>{
                if(producto.id == req.body.id){
                    return producto = req.body;
                }
                return producto;
            })
            let productoActualizar = JSON.stringify( productosUpdate , null , 2);
            fs.writeFileSync(path.resolve(__dirname,"../data/products.json" ), productoActualizar)
            res.redirect('/admin/adminProduct');*/
        }
    },
    erase: (req,res) => {
        let cont = 1;
        let borrarProducto = products.filter(item => {
            return item.id!=req.params.id
            });
        borrarProducto.map(item => {
                return item.id=cont++;
            });
        let nuevoProductoGuardar = JSON.stringify( borrarProducto, null , 2);
        fs.writeFileSync(path.resolve(__dirname, "../data/products.json"), nuevoProductoGuardar);
        res.redirect('../admin/adminProduct');
    }

};

module.exports = controllers;