import express, { Request, Response } from 'express';
import ProductCategory from '../../models/productCategory';

const router = express.Router();

router.get('/', async (req: Request, res: Response) => {
  try {
    const categories = await ProductCategory.findAll();
    res.json(categories);
  } catch (error) {
    console.error('Error fetching product categories:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

export default router;
