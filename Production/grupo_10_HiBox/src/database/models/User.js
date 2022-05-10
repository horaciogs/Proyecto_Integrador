module.exports = (sequelize, DataTypes) => {

    const User = sequelize.define("User", {
            id: {
                type: DataTypes.INTEGER,
                allowNull: false,
                autoIncrement: true,
                primaryKey: true
            },
            firstName: {
                type: DataTypes.STRING(15),
                allowNull: false
            },
            lastName: {
                type: DataTypes.STRING(15),
                allowNull: false
            },
            email: {
                type: DataTypes.STRING(30),
                allowNull: false
            },
            password: {
                type: DataTypes.STRING,
                allowNull: false
            },
            userImage: {
                type: DataTypes.STRING,
                allowNull: false
            },
            userPrivilege: {
                type: DataTypes.INTEGER,
                allowNull: false
            }
        },
        {
            tableName: "users",
            timestamps: false
        }
    );

    return User;
}