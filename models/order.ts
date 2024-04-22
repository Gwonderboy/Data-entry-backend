import { Model, DataTypes, Sequelize } from 'sequelize';
import { v4 as uuidv4 } from 'uuid';

interface OrderAttributes {
  id: string;
  customerName: string;
  productName: string;
  productCategory: string;
  price: number;
  orderDate: Date;
}

class Order extends Model<OrderAttributes> implements OrderAttributes {
  public id!: string;
  public customerName!: string;
  public productName!: string;
  public productCategory!: string;
  public price!: number;
  public orderDate!: Date;

  // We also need to declare the associations if any

  public static initialize(sequelize: Sequelize) {
    this.init(
      {
        id: {
          type: DataTypes.UUID,
          autoIncrement: true,
          primaryKey: true,
        },
        customerName: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        productName: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        productCategory: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        price: {
          type: DataTypes.DECIMAL(10, 2),
          allowNull: false,
        },
        orderDate: {
          type: DataTypes.DATE,
          allowNull: false,
        },
      },
      {
        sequelize,
        modelName: 'Order',
        tableName: 'orders', // Your table name in the database
        timestamps: true,
      }
    );
  }
}

export default Order;
