module.exports = (sequelize, DataTypes) => {

    const TokenUser = sequelize.define("TokenUser", {

            id: {
                type: DataTypes.INTEGER,
                allowNull: false,
                autoIncrement: true,
                primaryKey: true
            },
            email: {
                type: DataTypes.STRING(30),
                allowNull: false
            },
            token: {
                type: DataTypes.STRING,
                allowNull: false
            }
        },
        {
            tableName: "tokenusers",
            timestamps: false
        }
    );

    return TokenUser;
}