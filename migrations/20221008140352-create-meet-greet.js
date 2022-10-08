'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('meet_greets', {
          event_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
          },
      band_id: {
        type: Sequelize.INTEGER,
        allowNull:false
      },
      meet_start: {
        type: Sequelize.DATE,
        allowNull:false
      },
      meet_end: {
        type: Sequelize.DATE,
        allowNull:false
      },
      meet_greet_id: {
        type: Sequelize.INTEGER,
        allowNull:false
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
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('meet_greets');
  }
};