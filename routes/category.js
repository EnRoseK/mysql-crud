import express from 'express';
import {
  getCategories,
  getCategory,
  createCategory,
  deleteCategory,
  updateCategory,
} from '../services/category-service.js';

const router = express.Router();

router.get('/', async (req, res) => {
  const result = await getCategories();
  res.json(result);
});

router.get('/:id', async (req, res) => {
  const { id } = req.params;
  const result = await getCategory(id);

  res.json(result);
});

router.post('/', async (req, res) => {
  const { name, slug, parentId, created } = req.body;

  const result = await createCategory({ name, slug, parentId, created });

  res.json(result);
});

router.patch('/:id', async (req, res) => {
  const { id } = req.params;
  const { name, slug, parentId, updated } = req.body;

  const result = await updateCategory({ name, slug, parentId, updated, categoryId: id });

  res.json(result);
});

router.delete('/:id', async (req, res) => {
  const { id } = req.params;

  const result = await deleteCategory(id);

  res.json(result);
});

export default router;
