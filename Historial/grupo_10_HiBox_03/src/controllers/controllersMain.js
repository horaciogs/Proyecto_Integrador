const path = require ("path");
const db = require("../database/models");

const controllers = {
    index: async (req , res) => {
        let products = await db.Product.findAll({
            include: [{association: "states"}]
        });
        res.render('index', { products });
    },
    about: (req , res) => {
        res.render('about');
    },
    faqs: (req , res) => {
        res.render('faqs');
    },
    contactUs: (req , res) => {
        res.render('contact-us');
    }
}

module.exports = controllers;