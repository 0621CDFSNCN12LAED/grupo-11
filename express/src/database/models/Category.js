module.exports = (sequelize, dataTypes) => {
  const category = sequelize.define(
    "category",
    {
      id: {
        type: dataTypes.INTEGER(10),
        primaryKey: true,
        autoIncrement: true,
      },
      professionalsProfession: {
        type: dataTypes.STRING(255),
        allowNull: false,
      },
    },
    {
      tableName: "category",
      timestamps: false,
    }
  );

  category.associate = function (models) {
    category.belongsTo(models.Professional, {
      as: "profession",
      foreignKey: "",
    });
  };

  return category;
};