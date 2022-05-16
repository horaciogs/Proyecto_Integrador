const path = require('path');
const db = require('../../database/models');
const sequelize = db.sequelize;
const { Op } = require("sequelize");
const moment = require('moment');


    const UsersAPIController = {
        listUsers: async (req, res) => {
            const users = await db.Users.findAll();
            res.json({
                meta: {
                    status: 200,
                    count: users.length,
                    url: "/api/users/",
                },
                data: users.map((user) => {
                    return {
                        id: user.id,
                        firstName: user.firstName,
                        lastName: user.lastName,
                        email: user.email,
                        detail: `/api/users/${user.id}`,
                    };
                }),
            });
        },

        detailUser: async (req, res) => {
            const user = await db.Users.findByPk(req.params.id);
            res.json({
                meta: {
                    status: 200,
                    url: `/api/users/${user.id}`,
                },
                data: {
                    id: user.id,
                    email: user.email,
                    firstName: user.firstName,
                    lastName: user.lastName,
                    userImage: user.userImage,
                },
            });
        },
    }

module.exports = usersAPIController;