module.exports = (sequelize, dataTypes) => {
  const Users_professionals = sequelize.define(
    "Users_professionals",
    {
      id: {
        type: dataTypes.INTERGER(10),
        primaryKey: true,
        autoIncrement: true,
      },
      id_user: {
        type: dataTypes.STRING(255),
        allowNull: false,
        references: {
          model: users,
          key: "id",
        },
      },
      id_professional: {
        type: dataTypes.STRING(255),
        allowNull: false,
        references: {
          model: professionals,
          key: "id",
        },
      },
    },
    {
      tableName: "users_professionals",
      timestamps: false,
    }
  );
  return Users_professionals;
};
