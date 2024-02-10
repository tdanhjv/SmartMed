'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Family extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    };
    Family.init({

        address: DataTypes.STRING,
        member_number: DataTypes.INTEGER


    }, {
        sequelize,
        modelName: 'Family',
    });
    return Family;
};