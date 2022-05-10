module.exports = (sequelize, DataTypes) => {

    const SubCategory = sequelize.define("SubCategory", {

            id: {
                type: DataTypes.INTEGER,
                allowNull: false,
                autoIncrement: true,
                primaryKey: true
            },
            subCategory: {
                type: DataTypes.STRING(30),
                allowNull: false
            },
        },
        {
            tableName: "subCategorys",
            timestamps: false
        }
    );

    SubCategory.associate = function(models) {
        SubCategory.hasMany(models.Product, {
            as: "products",
            foreignKey: "subCategoryId"
        });
    }

    return SubCategory;
}