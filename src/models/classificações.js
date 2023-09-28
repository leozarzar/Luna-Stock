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
      classificações.hasMany(models.classificações,{foreignKey: "classificação"});
      classificações.hasMany(models.produtos,{foreignKey: "classificação"});
      classificações.belongsTo(models.classificações,{foreignKey: "classificação"});
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