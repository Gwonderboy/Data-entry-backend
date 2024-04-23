import { Request, Response } from 'express';
import Order from '../models/order';
import { v4 as uuidv4 } from 'uuid';

export const createOrder = async (req: Request, res: Response) => {
  try {
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

    res.status(201).json(order);
  } catch (error) {
    console.error('Error creating order:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};
