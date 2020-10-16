module.exports = function (sequelize, DataTypes) {
  var moment = require('moment');
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
      type: DataTypes.STRING,
      allowNull: false,
    },
    occasion: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    dateSent: {
      type: DataTypes.DATEONLY,
      get: function() {
        return moment(this.getDataValue('dateSent')).format('MM/DD/YYYY')
     },
      allowNull: false,
    },
    cost: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false,
    },
  });
  return SentGifts;
};
