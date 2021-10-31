module.exports = (sequelize, dataTypes) => {
    const Professional = sequelize.define('Professional',{
        id: {
            type: dataTypes.INTERGER(10),
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

    return Professional;
}