import { Request, Response } from 'express';
import Order from '../../models/order';
import { v4 as uuidv4 } from 'uuid';

// Controller function to handle POST request for creating a new order
export const createOrder = async (req: Request, res: Response) => {
  try {
    // Extract data from the request body
    const { customerName, productName, productCategory, price, orderDate } = req.body;
    const id = uuidv4();

    const order = await Order.create({
      id,
      customerName,
      productName,
      productCategory,
      price,
      orderDate,
    });

    // Respond with the created order
    res.status(201).json(order);
  } catch (error) {
    console.error('Error creating order:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};
