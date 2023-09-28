'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class movimentações extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      
      movimentações.belongsTo(models.produtos,{foreignKey: "produto_id"});
    }
  }
  movimentações.init({
    quantidade: DataTypes.FLOAT,
    preço: DataTypes.FLOAT,
    descrição: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'movimentações',
  });
  return movimentações;
};