'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Medicine_bottles extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    };
    Medicine_bottles.init({

        quantity: DataTypes.INTEGER,
        reminder_time: DataTypes.DATE,
        intake: DataTypes.BOOLEAN,
        takeaway: DataTypes.BOOLEAN,
        patient_name: DataTypes.STRING,
        medicine_ID: DataTypes.INTEGER,
        family_ID: DataTypes.INTEGER


    }, {
        sequelize,
        modelName: 'Medicine_bottles',
    });
    return Medicine_bottles;
};