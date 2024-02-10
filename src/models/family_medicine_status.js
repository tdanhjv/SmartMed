'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Family_medicine_status extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    };
    Family_medicine_status.init({


        family_ID: DataTypes.INTEGER,
        medicine_ID: DataTypes.INTEGER,
        total_quantity: DataTypes.INTEGER


    }, {
        sequelize,
        modelName: 'Family_medicine_status',
    });
    return Family_medicine_status;
};