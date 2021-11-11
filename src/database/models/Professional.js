module.exports = (sequelize, dataTypes) => {
    const Professional = sequelize.define('Professional',{
        id: {
            type: dataTypes.INTEGER(10),
            primaryKey: true,
            autoIncrement: true
        },
        professional_name: {
            type: dataTypes.STRING(255),
            allowNull: false
        },
        cuil_cuit: {
            type: dataTypes.BIGINT,
            allowNull: false,
            unique: true
        },
        dni: {
            type: dataTypes,
            allowNull: false,
            unique: true
        },
        profession: {
            type: dataTypes.STRING(255),
            allowNull: false
        },
        professional_image: {
            type: dataTypes.STRING(255),
            allowNull: false
        },
        professional_location: {
            type: dataTypes.STRING(255),
            allowNull: false
        },
        professional_description: {
            type: dataTypes.TEXT,
            allowNull: false
        },
        pay_method: {
            type: dataTypes.STRING(255),
            allowNull: false
        },
        celphone: {
            type: dataTypes.BIGINT,
            allowNull: false
        }
    },
    {
        tableName: 'professionals',
        timestamps: false
    })
    
    Professional.associate = function (models) {
        Professional.belongsTo(models.Membership, {
            as: "membership",
            foreignKey: "id_membership"
        });

        Professional.belongsToMany(models.User, {
            as: "user",
            through: "Users_professionals",
            foreignKey: "id_professional",
            otherKey: "id_user",
            timestamps: false,
        });
    }

    return Professional;
}