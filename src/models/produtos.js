'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class produtos extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {

      produtos.hasMany(models.movimentações,{foreignKey: "produto_id"});
      produtos.belongsTo(models.classificações,{foreignKey: "classificação"});
    }
  }
  produtos.init({
    nome: DataTypes.STRING,
    descrição: DataTypes.STRING,
    saldo_atual: DataTypes.FLOAT
  }, {
    sequelize,
    modelName: 'produtos',
  });
  return produtos;
};