module.exports = function (sequelize, DataTypes) {
  var moment = require('moment');
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
      get: function() {
        return moment(this.getDataValue('dateReceived')).format('MM/DD/YYYY')
     },
      allowNull: false,
    },
    thankYou: {
      type: DataTypes.BOOLEAN
    }
  });
  return ReceivedGifts;
};
