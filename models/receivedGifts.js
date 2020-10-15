module.exports = function (sequelize, DataTypes) {
  const ReceivedGifts = sequelize.define("ReceivedGifts", {
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
    giftReceived: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    occasion: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    dateReceived: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
    thankYou: {
      type: DataTypes.BOOLEAN
    },
  });
  return ReceivedGifts;
};
