'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [{
      username: 'John0',
      password: '123456',
      name: 'John',
      DOB: '12/06/2002',
      address: 'Wall street',
      gender: 1,
      CCCD: '123456',
      nationality: 'USA',
      BHYT: '123456',
      health_condition: 'normal',
      email: 'john@gmail.com',
      phone: '123456',
      family_ID: 1,
      role: 'Doc',
      createdAt: new Date(),
      updatedAt: new Date()
    }])
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
