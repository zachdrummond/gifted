module.exports = function(sequelize, DataTypes){
    const Sample = sequelize.define("Sample", {
        name: {
            type: DataTypes.STRING
        },
        price: {
            type: DataTypes.DECIMAL,
            precision: "2"
        }
    });
    return Sample;
};