'use strict';
module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable('Appointment', {
            // appointment_ID: DataTypes.STRING,
            // doctor_ID: DataTypes.STRING,
            // user_ID: DataTypes.STRING,
            // date: DataTypes.DATE,
            // note: DataTypes.TEXT
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            doctor_ID: {
                type: Sequelize.INTEGER
            },
            user_ID: {
                type: Sequelize.INTEGER
            },
            date: {
                type: Sequelize.DATE
            },
            note: {
                type: Sequelize.TEXT
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
        await queryInterface.dropTable('Appointment');
    }
};