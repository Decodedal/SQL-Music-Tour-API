'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class meet_greet extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  meet_greet.init({
    event_id:{
       type:DataTypes.INTEGER,
       primaryKey:true,
       autoIncrement:true
      },
    band_id:{
      type:DataTypes.INTEGER,
      allowNull:false
    },
    meet_start: {
      type:DataTypes.DATE,
      allowNull:false
    },
    meet_end:{
      type:DataTypes.DATE,
      allowNull:false
    },
    meet_greet_id:{
     type:DataTypes.INTEGER,
     allowNull:false
    }
  }, {
    sequelize,
    modelName: 'meet_greet',
  });
  return meet_greet;
};