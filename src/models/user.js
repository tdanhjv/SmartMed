'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  User.init({
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    name: DataTypes.STRING,
    DOB: DataTypes.DATE,
    address: DataTypes.STRING,
    gender: DataTypes.BOOLEAN,
    CCCD: DataTypes.STRING,
    nationality: DataTypes.STRING,
    BHYT: DataTypes.STRING,
    health_condition: DataTypes.TEXT,
    email: DataTypes.STRING,
    phone: DataTypes.STRING,
    family_ID: DataTypes.INTEGER,
    role: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};