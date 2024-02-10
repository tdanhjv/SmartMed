'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Users', {
      // username: DataTypes.STRING,
      // password: DataTypes.STRING,
      // name: DataTypes.STRING,
      // DOB: DataTypes.DATE,
      // address: DataTypes.STRING,
      // gender: DataTypes.BOOLEAN,
      // CCCD: DataTypes.STRING,
      // nationality: DataTypes.STRING,
      // BHYT: DataTypes.STRING,
      // health_condition: DataTypes.TEXT,
      // email: DataTypes.STRING,
      // phone: DataTypes.STRING,
      // family_ID: DataTypes.STRING,
      // role: DataTypes.STRING
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      username: {
        type: Sequelize.STRING
      },
      password: {
        type: Sequelize.STRING
      },
      name: {
        type: Sequelize.STRING
      },
      DOB: {
        type: Sequelize.DATE
      },
      address: {
        type: Sequelize.STRING
      },
      gender: {
        type: Sequelize.BOOLEAN
      },
      CCCD: {
        type: Sequelize.STRING
      },
      nationality: {
        type: Sequelize.STRING
      },
      BHYT: {
        type: Sequelize.STRING
      },
      health_condition: {
        type: Sequelize.TEXT
      },
      email: {
        type: Sequelize.STRING
      },
      phone: {
        type: Sequelize.STRING
      },
      family_ID: {
        type: Sequelize.INTEGER
      },
      role: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Users');
  }
};