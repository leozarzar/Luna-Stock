'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class classificações extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  classificações.init({
    nome: DataTypes.STRING,
    descrição: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'classificações',
  });
  return classificações;
};