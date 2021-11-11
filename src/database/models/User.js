module.exports = (sequelize, dataTypes) => {
    const User = sequelize.define('User',{
        id: {
            type: dataTypes.INTEGER(10),
            primaryKey: true,
            autoIncrement: true
        },
        user_name: {
            type: dataTypes.STRING(255),
            allowNull: false
        },
        birtdhay: {
            type: dataTypes.DATE,
            allowNull: false
        },
        email: {
            type: dataTypes.STRING(255),
            allowNull: false,
            unique: true
        },
        user_image: {
            type: dataTypes.STRING(255),
            defaultValue: true
        },
        user_password: {
            type: dataTypes.STRING(255),
            allowNull: false
        }
    },
    {
        tableName: 'users',
        timestamps: false
    })

    User.associate = function (models) {
        User.belongsToMany(models.Professional, {
            as: "professional",
            through: "Users_professionals",
            foreignKey: "id_user",
            otherKey: "id_professional",
            timestamps: false,
        });
    }

    return User;
}