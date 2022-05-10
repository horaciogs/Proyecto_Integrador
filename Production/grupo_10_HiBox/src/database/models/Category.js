module.exports = (sequelize, DataTypes) => {

    const Category = sequelize.define("Category", {

            id: {
                type: DataTypes.INTEGER,
                allowNull: false,
                autoIncrement: true,
                primaryKey: true
            },
            category: {
                type: DataTypes.STRING(30),
                allowNull: false
            },
        },
        {
            tableName: "categorys",
            timestamps: false
        }
    );

    Category.associate = function(models) {
        Category.hasMany(models.Product, {
            as: "products",
            foreignKey: "categoryId"
        });
    }

    return Category;
}