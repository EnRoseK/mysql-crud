import express from 'express';
import {
  createCategory,
  deleteCategory,
  getCategories,
  getSingleCategory,
  updateCategory,
} from '../services/category-service.js';

const router = express.Router();

router.get('/', async (req, res) => {
  res.json(await getCategories());
});

router.get('/:id', async (req, res) => {
  const { id } = req.params;

  try {
    res.json(await getSingleCategory(id));
  } catch (err) {
    res.status(400).json('Something went wrong!');
  }
});

router.post('/', async (req, res) => {
  const { name, slug, imageAddress } = req.body;

  try {
    res.json(await createCategory(name, slug, imageAddress));
  } catch (err) {
    res.status(400).json('Something went wrong!');
  }
});

router.patch('/:id', async (req, res) => {
  const { id } = req.params;
  const { name, slug, imageAddress, productCount } = req.body;

  try {
    res.json(await updateCategory(name, slug, imageAddress, productCount, id));
  } catch (err) {
    res.status(500).json('Something went wrong!');
  }
});

router.delete('/:id', async (req, res) => {
  const { id } = req.params;

  try {
    res.json(await deleteCategory(id));
  } catch (err) {
    res.status(500).json('Something went wrong!');
  }
});

export default router;
