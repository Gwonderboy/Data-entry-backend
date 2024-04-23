import express from 'express';
import { getAllCategories } from '../controllers/getProductCategories';

const router = express.Router();

router.get('/getAllCategories', getAllCategories);

export default router;
