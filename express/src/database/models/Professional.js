module.exports = (sequelize, dataTypes) => {
  const Professional = sequelize.define(
    "Professional",
    {
      id: {
        type: dataTypes.INTEGER(10),
        primaryKey: true,
        autoIncrement: true,
      },
      professionalName: {
        type: dataTypes.STRING(255),
        allowNull: false,
      },
      cuilCuit: {
        type: dataTypes.BIGINT,
        allowNull: false,
        unique: true,
      },
      dni: {
        type: dataTypes,
        allowNull: false,
        unique: true,
      },
      profession: {
        type: dataTypes.STRING(255),
        allowNull: false,
      },
      professionalImage: {
        type: dataTypes.STRING(255),
        allowNull: false,
      },
      professionalLocation: {
        type: dataTypes.STRING(255),
        allowNull: false,
      },
      professionalDescription: {
        type: dataTypes.TEXT,
        allowNull: false,
      },
      payMethod: {
        type: dataTypes.STRING(255),
        allowNull: false,
      },
      celphone: {
        type: dataTypes.BIGINT,
        allowNull: false,
      },
      id_membership: {
        type: dataTypes.INTEGER(10),
      },
    },
    {
      tableName: "professionals",
      timestamps: false,
    }
  );

  Professional.associate = function (models) {
    Professional.belongsTo(models.Membership, {
      as: "membership",
      foreignKey: "id_membership",
    });

    Professional.belongsToMany(models.User, {
      as: "user",
      through: "Users_professionals",
      foreignKey: "id_professional",
      otherKey: "id_user",
      timestamps: false,
    });
  };

  return Professional;
};
