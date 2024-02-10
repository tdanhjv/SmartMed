'use strict';
module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable('Family_medicine_status', {
            // family_ID: DataTypes.INTEGER,
            // medicine_ID: DataTypes.INTEGER,
            // total_quantity: DataTypes.INTEGER

            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            family_ID: {
                type: Sequelize.INTEGER
            },
            medicine_ID: {
                type: Sequelize.INTEGER
            },
            total_quantity: {
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
        await queryInterface.dropTable('Family_medicine_status');
    }
};