import express from 'express';
import dotenv from 'dotenv';
import sequelize from './configurations';
import Order from '../models/order';
import revenueRoute from './routes/revenue';
import orderRoute from './routes/order';
import customerRoute from './routes/customers';

dotenv.config();
const app = express();

async function initializeDatabase() {
  try {
    await sequelize.authenticate();
    console.log('Connection to the database has been established successfully.');

    await sequelize.sync({ alter: true });
    console.log('Database synchronized.');
    Order.initialize(sequelize)
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}

initializeDatabase();

app.use(express.json());
app.use('/api/revenue', revenueRoute);
app.use('/api/orders', orderRoute);
app.use('/api/customers', customerRoute);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
