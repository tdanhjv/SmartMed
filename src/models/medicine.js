'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Medicine extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    };
    Medicine.init({

        name: DataTypes.STRING,
        pill_type: DataTypes.STRING,
        components: DataTypes.TEXT,
        manufacturer_date: DataTypes.DATE,
        expiration_date: DataTypes.DATE,
        manufacturer_location: DataTypes.STRING,
        manufacturer_name: DataTypes.STRING,
        usage_instruction: DataTypes.TEXT,
        prescribed: DataTypes.BOOLEAN,
        function: DataTypes.TEXT,
        image: DataTypes.STRING


    }, {
        sequelize,
        modelName: 'Medicine',
    });
    return Medicine;
};