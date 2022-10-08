'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class event extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  event.init({
    event_id:{
      type:DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type:DataTypes.STRING,
      allowNull:false
    },
    start_time: {
      type:DataTypes.DATE,
      allowNull:flase
    },
    end_time:{
      type:DataTypes.DATE,
      allowNull:flase
    }
  }, {
    sequelize,
    modelName: 'event',
    tableName:'events',
    timestamps:false
  });
  return event;
};