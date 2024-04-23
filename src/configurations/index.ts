import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';
dotenv.config();

const sequelize = new Sequelize({
  dialect: 'mysql',
  host: process.env.DB_HOST || 'localhost',
  username: process.env.DB_USER || 'username',
  password: process.env.DB_PASSWORD || 'password',
  database: process.env.DB_DATABASE || 'database_name',
  define: {
    underscored: true,
  },
});

export default sequelize;
