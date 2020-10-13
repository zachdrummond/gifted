module.exports = function(sequelize, DataTypes){
    const Sent = sequelize.define("Sent", {
        user_id: {
            type: DataTypes.int,
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
            type: DataTypes.STRING,
            allowNull: false,
        }
    });
    return Sent;
};