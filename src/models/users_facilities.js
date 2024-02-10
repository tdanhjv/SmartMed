'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Users_facilities extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    };
    Users_facilities.init({

        user_ID: DataTypes.INTEGER,
        facility_ID: DataTypes.INTEGER


    }, {
        sequelize,
        modelName: 'Users_facilities',
    });
    return Users_facilities;
};