'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Prescription_medicines extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    };
    Prescription_medicines.init({

        prescription_ID: DataTypes.INTEGER,
        medicine_ID: DataTypes.INTEGER,
        quantity: DataTypes.INTEGER


    }, {
        sequelize,
        modelName: 'Prescription_medicines',
    });
    return Prescription_medicines;
};