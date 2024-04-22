import express, { Request, Response } from 'express';
import Order from '../../models/order';

const router = express.Router();

router.get('/total-revenue', async (req: Request, res: Response) => {
  try {
    const totalRevenue = await Order.sum('price');
    res.json({ totalRevenue });
  } catch (error) {
    console.error('Error fetching total revenue:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

export default router;