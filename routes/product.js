import express from 'express';
import {
  getProducts,
  getSingleProduct,
  createProduct,
  updateProduct,
  deleteProduct,
} from '../services/product-service.js';

const router = express.Router();

router.get('/', async (req, res) => {
  res.json(await getProducts());
});

router.get('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const result = await getSingleProduct(id);
    res.json(result);
  } catch (err) {
    res.status(400).json('Something went wrong');
  }
});

router.post('/', async (req, res) => {
  const { name, description, price, imgUrl } = req.body;

  try {
    const result = await createProduct(name, description, price, imgUrl);

    res.json(result);
  } catch (err) {
    res.status(500).json('Something went wrong');
  }
});

router.patch('/:id', async (req, res) => {
  const { id } = req.params;
  const { name, description, price, imgUrl } = req.body;

  try {
    const result = await updateProduct(name, description, price, imgUrl, id);

    res.json(result);
  } catch (err) {
    res.status(500).json('Something went wrong');
  }
});

router.delete('/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const result = await deleteProduct(id);

    res.json(result);
  } catch (err) {
    res.status(500).json('Something went wrong');
  }
});

export default router;
