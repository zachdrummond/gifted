module.exports = function (sequelize, DataTypes) {
  const Received = sequelize.define("Received", {
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    senderName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    senderAddress: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    gift: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    occasion: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    date: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    thankYou: {
      type: DataTypes.BOOLEAN,
    },
  });
  return Received;
};
