'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Prescription extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    };
    Prescription.init({

        detail: DataTypes.TEXT,
        instruction: DataTypes.TEXT,
        date: DataTypes.DATE,
        appointment_ID: DataTypes.INTEGER,
        doctor_ID: DataTypes.INTEGER,
        user_ID: DataTypes.INTEGER,
        pharmacist_ID: DataTypes.INTEGER


    }, {
        sequelize,
        modelName: 'Prescription',
    });
    return Prescription;
};