'use strict';
module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable('Prescription', {
            // prescription_ID: DataTypes.INTEGER,
            // detail: DataTypes.TEXT,
            // instruction: DataTypes.TEXT,
            // date: DataTypes.DATE,
            // appointment_ID: DataTypes.INTEGER,
            // doctor_ID: DataTypes.INTEGER,
            // user_ID: DataTypes.INTEGER,
            // pharmacist_ID: DataTypes.INTEGER
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            detail: {
                type: Sequelize.TEXT
            },
            instruction: {
                type: Sequelize.TEXT
            },
            date: {
                type: Sequelize.DATE
            },
            appointment_ID: {
                type: Sequelize.INTEGER
            },
            doctor_ID: {
                type: Sequelize.INTEGER
            },
            user_ID: {
                type: Sequelize.INTEGER
            },
            pharmacist_ID: {
                type: Sequelize.INTEGER
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
        await queryInterface.dropTable('Prescription');
    }
};