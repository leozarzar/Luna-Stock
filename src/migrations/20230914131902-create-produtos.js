'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('produtos', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUID
      },
      nome: {
        type: Sequelize.STRING
      },
      descrição: {
        type: Sequelize.STRING
      },
      saldo_atual: {
        type: Sequelize.FLOAT
      },
      classificação: {
        allowNull: false,
        type: Sequelize.UUID,
        references: {model: "classificações",key:"id"}
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
    await queryInterface.dropTable('produtos');
  }
};