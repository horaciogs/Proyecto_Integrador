module.exports = (sequelize, DataTypes) => {

    const ProductCart = sequelize.define("ProductCart", {

            id: {
                type: DataTypes.INTEGER,
                allowNull: false,
                autoIncrement: true,
                primaryKey: true
            },
            userId: {
                type: DataTypes.INTEGER,
                allowNull: false
            },
            productId: {
                type: DataTypes.INTEGER,
                allowNull: false
            }
        },
        {
            tableName: "productscart",
            timestamps: false
        }
    );

    return ProductCart;
}