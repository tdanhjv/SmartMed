'use strict';
module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable('Pharmacists', {
            // pharmacist_ID: DataTypes.INTEGER,
            // user_ID: DataTypes.INTEGER,
            // position: DataTypes.STRING,
            // image: DataTypes.STRING

            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            user_ID: {
                type: Sequelize.INTEGER
            },
            position: {
                type: Sequelize.STRING
            },
            image: {
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
        await queryInterface.dropTable('Pharmacists');
    }
};