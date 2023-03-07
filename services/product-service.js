import pool from '../config/mysql-config.js';

export const getProducts = async () => {
  const [result] = await pool.query(`select * from product`);
  return result;
};

export const getSingleProduct = async (id) => {
  const [[result]] = await pool.query(`select * from product where id = ?`, [id]);
  return result ? result : null;
};

export const createProduct = async (name, description, price, imgUrl) => {
  const [result] = await pool.query(
    `insert into product (name, description, price, imgUrl, createdAt) values (?, ?, ?, ?, now())`,
    [name, description, price, imgUrl]
  );

  return result;
};

export const updateProduct = async (name, description, price, imgUrl, id) => {
  const [result] = await pool.query(
    `update product set name = ?, description = ?, price = ?, imgUrl = ? where id = ?`,
    [name, description, price, imgUrl, id]
  );

  return result;
};

export const deleteProduct = async (id) => {
  const [result] = await pool.query(`delete from product where id = ?`, [id]);

  return result;
};
