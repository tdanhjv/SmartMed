'use strict';
module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable('Doctors', {
            // doctor_ID: DataTypes.INTEGER,
            // user_ID: DataTypes.INTEGER,
            // specialty: DataTypes.STRING,
            // position: DataTypes.STRING,

            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            user_ID: {
                type: Sequelize.INTEGER
            },
            specialty: {
                type: Sequelize.STRING
            },
            position: {
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
        await queryInterface.dropTable('Doctors');
    }
};