module.exports = (sequelize, dataTypes) => {
  const Membership = sequelize.define(
    "Membership",
    {
      id: {
        type: dataTypes.INTERGER(10),
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

  return Memberships;
};
