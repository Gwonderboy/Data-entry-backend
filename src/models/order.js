"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
class Order extends sequelize_1.Model {
    // We also need to declare the associations if any
    static initialize(sequelize) {
        this.init({
            id: {
                type: sequelize_1.DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true,
            },
            customerName: {
                type: sequelize_1.DataTypes.STRING,
                allowNull: false,
            },
            productName: {
                type: sequelize_1.DataTypes.STRING,
                allowNull: false,
            },
            productCategory: {
                type: sequelize_1.DataTypes.STRING,
                allowNull: false,
            },
            price: {
                type: sequelize_1.DataTypes.DECIMAL(10, 2),
                allowNull: false,
            },
            orderDate: {
                type: sequelize_1.DataTypes.DATE,
                allowNull: false,
            },
        }, {
            sequelize,
            modelName: 'Order',
            tableName: 'orders', // Your table name in the database
            timestamps: true,
        });
    }
}
exports.default = Order;
