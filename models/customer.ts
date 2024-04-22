import { DataTypes, Model } from 'sequelize';
import sequelize from '../src/configurations';
import { v4 as uuidv4 } from 'uuid';

interface CustomerAttributes {
  id: string;
  name: string;
  email: string;
}

class Customer extends Model<CustomerAttributes> implements CustomerAttributes {
  public id!: string;
  public name!: string;
  public email!: string;
}

Customer.init(
  {
    id: {
      type: DataTypes.UUID,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: 'Customer',
    tableName: 'customers',
    timestamps: true,
  }
);

export default Customer;
