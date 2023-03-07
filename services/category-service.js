import pool from '../config/mysql-config.js';
import { nanoid } from 'nanoid';

export const getCategories = async () => {
  try {
    const [result] = await pool.query(`select * from category`);

    return result;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const getCategory = async (categoryId) => {
  try {
    const [[result]] = await pool.query(`select * from category where categoryId = ?`, [categoryId]);

    return result;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const createCategory = async (category) => {
  try {
    const categoryId = nanoid();

    await pool.query(
      `insert into category (categoryId, name, slug, parent_id, created, createdAt ) values (?, ?, ?, ?, ?, ?)`,
      [categoryId, category.name, category.slug, category.parentId, category.created, new Date()]
    );

    const result = await getCategory(categoryId);

    return result;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const updateCategory = async (category) => {
  try {
    await pool.query(
      `update category set name = ?, slug = ?, parent_id = ?, updated = ?, updatedAt = ? where categoryId = ?`,
      [category.name, category.slug, category.parentId, category.updated, new Date(), category.categoryId]
    );

    const result = await getCategory(category.categoryId);

    return result;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const deleteCategory = async (categoryId) => {
  try {
    await pool.query(`delete from category where categoryId = ?`, [categoryId]);

    return categoryId;
  } catch (error) {
    console.error(error);
    return null;
  }
};
