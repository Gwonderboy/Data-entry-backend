import { Model, DataTypes, Sequelize } from 'sequelize';

interface CustomerAttributes {
  id: string;
  name: string;
  email: string;
}

class Customer extends Model<CustomerAttributes> implements CustomerAttributes {
  public id!: string;
  public name!: string;
  public email!: string;

  public static initialize(sequelize: Sequelize) {
    this.init(
      {
        id: {
          type: DataTypes.UUID,
          primaryKey: true,
          defaultValue: DataTypes.UUIDV4,
        },
        name: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        email: {
          type: DataTypes.STRING,
          allowNull: false,
          unique: true,
        },
      },
      {
        sequelize,
        modelName: 'Customer',
        tableName: 'customers',
        timestamps: true,
      }
    );
  }
}

export default Customer;
