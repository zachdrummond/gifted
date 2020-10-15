module.exports = function (sequelize, DataTypes) {
  const SentGifts = sequelize.define("SentGifts", {
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    receiverName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    receiverAddress: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    giftSent: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    occasion: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    dateSent: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
  return SentGifts;
};
