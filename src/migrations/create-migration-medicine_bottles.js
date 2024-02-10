'use strict';
module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable('Medicine_bottles', {
            // bottle_ID: DataTypes.INTEGER,
            // quantity: DataTypes.INTEGER,
            // reminder_time: DataTypes.DATE,
            // intake: DataTypes.BOOLEAN,
            // takeaway: DataTypes.BOOLEAN,
            // patient_name: DataTypes.STRING,
            // medicine_ID: DataTypes.INTEGER,
            // family_ID: DataTypes.INTEGER


            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            quantity: {
                type: Sequelize.INTEGER
            },
            reminder_time: {
                type: Sequelize.DATE
            },
            intake: {
                type: Sequelize.BOOLEAN
            },
            takeaway: {
                type: Sequelize.BOOLEAN
            },
            patient_name: {
                type: Sequelize.STRING
            },
            medicine_ID: {
                type: Sequelize.INTEGER
            },
            family_ID: {
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
        await queryInterface.dropTable('Medicine_bottles');
    }
};