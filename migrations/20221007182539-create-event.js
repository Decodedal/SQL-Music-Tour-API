'use strict';

const { sequelize } = require('../models');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('events', {
        event_id:{
          type:sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true
        },
        name: {
          type:sequelize.STRING,
          allowNull:false
        },
        start_time: {
          type:sequelize.DATE,
          allowNull:flase
        },
        end_time:{
          type:sequelize.DATE,
          allowNull:flase
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
    await queryInterface.dropTable('events');
  }
};