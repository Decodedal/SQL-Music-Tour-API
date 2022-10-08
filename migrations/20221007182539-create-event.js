
'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('events', {
        event_id:{
          type:Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true
        },
        name: {
          type:Sequelize.STRING,
          allowNull:false
        },
        start_time: {
          type:Sequelize.DATE,
          allowNull:false
        },
        end_time:{
          type:Sequelize.DATE,
          allowNull:false
        }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('events');
  }
};