module.exports = (sequelize, DataTypes) => {

    const Product = sequelize.define("Product", {

            id: {
                type: DataTypes.INTEGER,
                allowNull: false,
                autoIncrement: true,
                primaryKey: true
            },
            name: {
                type: DataTypes.STRING(30),
                allowNull: false
            },
            price: {
                type: DataTypes.DOUBLE,
                allowNull: false
            },
            priceBefore: {
                type: DataTypes.DOUBLE
            },
            detail: {
                type: DataTypes.TEXT
            },
            productImage: {
                type: DataTypes.STRING,
                allowNull: false
            },
            stateId: {
                type: DataTypes.INTEGER,
                allowNull: false
            },
            categoryId: {
                type: DataTypes.INTEGER,
                allowNull: false
            },
            subCategoryId: {
                type: DataTypes.INTEGER,
                allowNull: false
            }
        },
        {
            tableName: "products",
            timestamps: false
        }
    );

    Product.associate = function(models) {
        Product.belongsTo(models.Category, {
            as: "categorys",
            foreignKey: "categoryId"
        });

        Product.belongsTo(models.SubCategory, {
            as: "subCategorys",
            foreignKey: "subCategoryId"
        });

        Product.belongsTo(models.State, {
            as: "states",
            foreignKey: "stateId"
        });
    }

    return Product;
}