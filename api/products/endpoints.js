import express from 'express';
import { getProducts, getProduct } from './controller.js';

const router = express.Router();

router.route('/api/products').get(getProducts);
router.route('/api/products/:id').get(getProduct);

export default router;
