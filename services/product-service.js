import pool from "../config/mysql-config.js";
import { nanoid } from "nanoid";

export const getProducts = async () => {
  try {
    const [result] = await pool.query(`select * from product`);

    return result;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const getProduct = async (id) => {
  try {
    const [[result]] = await pool.query(
      `select * from product where productId = ?`,
      [id]
    );

    return result;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const createProduct = async (product) => {
  try {
    const productId = nanoid();

    await pool.query(
      `insert into product (productId, categoryId, name, slug, description, imageUrl, text, price, discountPrice, remaining, rating, created, createdAt) values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [
        productId,
        product.categoryId,
        product.name,
        product.slug,
        product.description,
        product.imageUrl,
        product.text,
        product.price,
        product.discountPrice,
        product.remaining,
        product.rating,
        product.created,
        new Date(),
      ]
    );

    const result = await getProduct(productId);

    return result;
  } catch (error) {
    console.error(error);
    return null;
  }
};
