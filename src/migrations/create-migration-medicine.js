'use strict';
module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable('Medicine', {
            // medicine_ID: DataTypes.INTEGER,
            // name: DataTypes.STRING,
            // pill_type: DataTypes.STRING,
            // components: DataTypes.TEXT,
            // manufacturer_date: DataTypes.DATE,
            // expiration_date: DataTypes.DATE,
            // manufacturer_location: DataTypes.STRING,
            // manufacturer_name: DataTypes.STRING,
            // usage_instruction: DataTypes.TEXT,
            // prescribed: DataTypes.BOOLEAN,
            // function: DataTypes.TEXT
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            name: {
                type: Sequelize.STRING
            },
            pill_type: {
                type: Sequelize.STRING
            },
            components: {
                type: Sequelize.TEXT
            },
            manufacture_date: {
                type: Sequelize.DATE
            },
            expiration_date: {
                type: Sequelize.DATE
            },
            manufacture_location: {
                type: Sequelize.STRING
            },
            manufacture_name: {
                type: Sequelize.STRING
            },
            usage_instruction: {
                type: Sequelize.TEXT
            },
            prescribed: {
                type: Sequelize.BOOLEAN
            },
            function: {
                type: Sequelize.TEXT
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
        await queryInterface.dropTable('Medicine');
    }
};