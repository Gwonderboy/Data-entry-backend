import { Model, DataTypes, Sequelize } from 'sequelize';
import { v4 as uuidv4 } from 'uuid';

interface ProductCategoryAttributes {
  id: string;
  name: string;
}

class ProductCategory extends Model<ProductCategoryAttributes> implements ProductCategoryAttributes {
  public id!: string;
  public name!: string;

  public static initialize(sequelize: Sequelize) {
    this.init(
      {
        id: {
          type: DataTypes.UUID,
          primaryKey: true,
          autoIncrement: true,
        },
        name: {
          type: DataTypes.STRING,
          allowNull: false,
        },
      },
      {
        sequelize,
        modelName: 'ProductCategory',
        tableName: 'ProductCategories', // Make sure to match the table name in your database
        timestamps: true,
      }
    );
  }
}

export default ProductCategory;
