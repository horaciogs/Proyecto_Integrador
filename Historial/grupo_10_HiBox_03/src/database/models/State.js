module.exports = (sequelize, DataTypes) => {

    const State = sequelize.define("State", {

            id: {
                type: DataTypes.INTEGER,
                allowNull: false,
                autoIncrement: true,
                primaryKey: true
            },
            state: {
                type: DataTypes.STRING(30),
                allowNull: false
            },
        },
        {
            tableName: "states",
            timestamps: false
        }
    );

    State.associate = function(models) {
        State.hasMany(models.Product, {
            as: "products",
            foreignKey: "stateId"
        });
    }

    return State;
}