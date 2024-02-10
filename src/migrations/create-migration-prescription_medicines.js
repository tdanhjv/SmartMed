'use strict';
module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable('Prescription_medicines', {
            // Prescription_medicines_ID: DataTypes.INTEGER,
            // prescription_ID: DataTypes.INTEGER,
            // medicine_ID: DataTypes.INTEGER,
            // quantity: DataTypes.INTEGER
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            prescription_ID: {
                type: Sequelize.INTEGER
            },
            medicine_ID: {
                type: Sequelize.INTEGER
            },
            quantity: {
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