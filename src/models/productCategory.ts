import { Model, DataTypes, Sequelize } from 'sequelize';

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
          defaultValue: DataTypes.UUIDV4,
        },
        name: {
          type: DataTypes.STRING,
          allowNull: false,
        },
      },
      {
        sequelize,
        modelName: 'ProductCategory',
        tableName: 'productcategories',
        timestamps: true,
      }
    );
  }
  static tableName = 'productcategories';
}

export default ProductCategory;
