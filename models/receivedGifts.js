module.exports = function(sequelize, DataTypes){
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
    return Received;
};