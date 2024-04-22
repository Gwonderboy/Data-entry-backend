'use strict';
const { QueryInterface } = require('sequelize');
const productCategories = ['Electronics', 'Clothing', 'Books', 'Home & Garden', 'Health & Beauty'];

module.exports = {
  // Migration to set up tables and insert product categories
  up: async (queryInterface, Sequelize) => {
    // Create tables
    await queryInterface.createTable('Orders', {
      id: {
        type: Sequelize.STRING,
        primaryKey: true,
        autoIncrement: true,
      },
      customerId: {
        type: Sequelize.STRING,
        allowNull: false,
        // references: {
        //   model: 'Customers',
        //   key: 'id',
        // },
      },
      productId: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      quantity: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      totalPrice: {
        type: Sequelize.FLOAT,
        allowNull: false,
      },
      orderDate: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });

    await queryInterface.createTable('Customers', {
      id: {
        type: Sequelize.STRING,
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
      },
      phone: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      address: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });

    await queryInterface.createTable('ProductCategories', {
      id: {
        type: Sequelize.STRING,
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });

    // Insert product categories
    await queryInterface.bulkInsert('ProductCategories', productCategories.map(name => ({ name, createdAt: new Date(), updatedAt: new Date() })));
  },

  // Rollback migration
  down: async (queryInterface, Sequelize) => {
    // Drop tables
    await queryInterface.dropTable('Orders');
    await queryInterface.dropTable('Customers');
    await queryInterface.dropTable('ProductCategories');
  },
};
