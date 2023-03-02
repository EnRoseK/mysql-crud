import pool from '../config/mysql-config.js';

export const getCategories = async () => {
  const [result] = await pool.query('select * from category');

  return result;
};

export const getSingleCategory = async (id) => {
  const [[result]] = await pool.query(`select * from category where id = ?`, [id]);

  return result;
};

export const createCategory = async (name, slug, imageAddress) => {
  const [result] = await pool.query(
    `insert into category (name, slug, imageAddress, createdAt) values (?, ?, ?, now())`,
    [name, slug, imageAddress]
  );

  return result;
};

export const updateCategory = async (name, slug, imageAddress, productCount, id) => {
  const [result] = await pool.query(
    `update category set name = ?, slug = ?, imageAddress = ?, productCount = ? where id = ?`,
    [name, slug, imageAddress, productCount, id]
  );

  return result;
};

export const deleteCategory = async (id) => {
  const [result] = await pool.query(`delete from category where id = ?`, [id]);

  return result;
};
