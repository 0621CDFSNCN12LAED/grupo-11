module.exports = (sequelize, dataTypes) => {
  const Membership = sequelize.define(
    "Membership",
    {
      id: {
        type: dataTypes.INTEGER(10),
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        type: dataTypes.STRING(255),
        allowNull: false,
      },
    },
    {
      tableName: "memberships",
      timestamps: false,
    }
  );

  Membership.associate = function (models) {
    Membership.hasMany(models.Professional, {
      as: "Professional",
      foreignKey: "id_membership"
    });
  }
  return Membership;
};
