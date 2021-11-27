module.exports = (sequelize, dataTypes) => {
  const Users_professionals = sequelize.define(
    "Users_professionals",
    {
      id: {
        type: dataTypes.INTEGER(10),
        primaryKey: true,
        autoIncrement: true,
      },
      id_user: {
        type: dataTypes.INTEGER(10),
        allowNull: false,
      },
      id_professional: {
        type: dataTypes.INTEGER(10),
        allowNull: false,
      },
    },
    {
      tableName: "users_professionals",
      timestamps: false,
    }
  );
  return Users_professionals;
};
