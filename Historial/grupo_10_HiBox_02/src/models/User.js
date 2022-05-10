const fs = require ('fs');
const bcryptjs = require('bcryptjs');
const { all } = require('../routes/routesUsers');

const User = {
    fileName: './data/users.json',

    getData: function() {
        return JSON.parse(fs.readFileSync(this.fileName, 'utf-8'));
    },

    findAll: function () {
        return this.getData();
    },

    generateId: function() {
        let allUsers = this.findAll();
        let lastUser = allUsers.pop();
        if(lastUser) {
            return lastUser.id + 1;
        } else {
            return 1;
        }  
    },

    findByPk: function (id) {
        let allUsers = this.findAll();
        let userRequire = allUsers.find(oneUser => oneUser.id == id);
        return userRequire;
    },

    findByField: function (field, text) {
        let allUsers = this.findAll();
        let userRequire = allUsers.find(oneUser => oneUser[field] === text);
        return userRequire;
    },

    create: function(userData, imgName) {
        let allUsers = this.findAll();
        let newUser = {
            id: this.generateId(),
            //firstName: userData.firstName,
            //lastName: userData.lastName,
            //email: userData.email,
            ...userData,
            password: bcryptjs.hashSync(userData.password, 10),
            //birthDate: userData.birthDate,
            img: imgName
        }
        delete newUser.confirmPsw; 
        delete newUser.terminosYCondiciones;
        allUsers.push(newUser);
        fs.writeFileSync (this.fileName, JSON.stringify (allUsers, null, ' '));
    },

    edit: function(userData, imgName) {
        let allUsers = this.findAll();
        let userRequire = allUsers.find(oneUser => oneUser.emal === userData.emal);
        let newUser = {
            ...userData,
            password: userRequire.password,
            confirmPsw: userRequire.confirmPsw,
            img: imgName
        };
        let finalUsers = allUsers.filter(oneUser => oneUser.id != userRequire.id);
        finalUsers.push(newUser);
        fs.writeFileSync (this.fileName, JSON.stringify (finalUsers, null, ' '));
    },

    delete: function (id) {
        let allUsers = this.findAll();
        let finalUsers = allUsers.filter(oneUser => oneUser.id != id);
        fs.writeFileSync (this.fileName, JSON.stringify (finalUsers, null, ' '));
    }
}

module.exports = User;