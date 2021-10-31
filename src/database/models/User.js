module.exports = (sequelize, dataTypes) => {
    const User = sequelize.define('User',{
        id: {
            type: dataTypes.INTERGER(10),
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

    return User;
}