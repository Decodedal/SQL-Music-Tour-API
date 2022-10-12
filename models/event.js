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
    static associate({stage,StageEvent, meet_greet,SetTime}) {
      event.belongsToMany(stage,{
           foreignKey:'event_id',
           as:"stages",
           through:StageEvent
      })
      //set times
      event.hasMany(SetTime,{
        foreignKey:"event_id",
        as:"set_times"
      })
      event.hasMany(meet_greet,{
        foreignKey:'event_id',
        as:"meet_greets"
      })
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
      allowNull:false
    },
    end_time:{
      type:DataTypes.DATE,
      allowNull:false
    }
  }, {
    sequelize,
    modelName: 'event',
    tableName:'events',
    timestamps:false
  });
  return event;
};