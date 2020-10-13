module.exports = function(sequelize, DataTypes){
    const Receive = sequelize.define("Receive", {
        user_id: {
            type: DataTypes.int,
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
            type: DataTypes.STRING,
            allowNull: false,
        },
        thankYouCard: {
            type: DataTypes.BOOLEAN,
        }
    });
    return Receive;
};