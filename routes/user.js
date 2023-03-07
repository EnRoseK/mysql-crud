import express from 'express';
import { getUsers, getUser, createUser, updateUser, deleteUser } from '../services/user-service.js';

const router = express.Router();

router.get('/', async (req, res) => {
  const result = await getUsers();
  res.json(result);
});

router.get('/:id', async (req, res) => {
  const { id } = req.params;
  const result = await getUser(id);
  res.json(result);
});

router.post('/', async (req, res) => {
  const { firstname, lastname, birthdate, email, phone, password, imageUrl } = req.body;
  const result = await createUser({ firstname, lastname, birthdate, email, phone, password, imageUrl });

  res.json(result);
});

router.patch('/:id', async (req, res) => {
  const { id } = req.params;
  const { firstname, lastname, birthdate, email, phone, password, imageUrl } = req.body;

  const result = await updateUser({ firstname, lastname, birthdate, email, phone, password, imageUrl, userId: id });

  res.json(result);
});

router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  const result = await deleteUser(id);

  res.json(result);
});

export default router;
