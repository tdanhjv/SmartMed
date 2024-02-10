'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Pharmacist extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    };
    Pharmacist.init({

        user_ID: DataTypes.INTEGER,
        position: DataTypes.STRING,
        image: DataTypes.STRING


    }, {
        sequelize,
        modelName: 'Pharmacist',
    });
    return Pharmacist;
};