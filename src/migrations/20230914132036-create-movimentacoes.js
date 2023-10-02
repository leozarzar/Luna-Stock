'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('movimentações', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUID
      },
      produto_id: {
        allowNull: false,
        type: Sequelize.UUID,
        references: {model: "produtos",key:"id"}
      },
      quantidade: {
        type: Sequelize.FLOAT
      },
      preço: {
        type: Sequelize.FLOAT
      },
      descrição: {
        type: Sequelize.STRING
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
    await queryInterface.dropTable('movimentações');
  }
};