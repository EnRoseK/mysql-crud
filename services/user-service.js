import pool from '../config/mysql-config.js';
import { nanoid } from 'nanoid';

export const getUsers = async () => {
  const [result] = await pool.query(`select * from user`);

  return result;
};

export const getUser = async (userId) => {
  const [[result]] = await pool.query(`select * from user where userId = ?`, [userId]);

  return result;
};

export const createUser = async (user) => {
  const userId = nanoid();
  try {
    await pool.query(
      `insert into user (userId, firstname, lastname, birthdate, email, phone, password, imageUrl, createdAt) values (?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [
        userId,
        user.firstname,
        user.lastname,
        user.birthdate,
        user.email,
        user.phone,
        user.password,
        user.imageUrl,
        new Date(),
      ]
    );

    const newUser = await getUser(userId);

    return newUser;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const updateUser = async (user) => {
  try {
    await pool.query(
      `update user set firstname = ?, lastname = ?, birthdate = ?, email = ?, phone = ?, password = ?, imageUrl = ?, updatedAt = ? where userId = ?`,
      [
        user.firstname,
        user.lastname,
        user.birthdate,
        user.email,
        user.phone,
        user.password,
        user.imageUrl,
        new Date(),
        user.userId,
      ]
    );

    const result = await getUser(user.userId);
    return result;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const deleteUser = async (userId) => {
  try {
    await pool.query(`delete from user where userId = ?`, [userId]);

    return userId;
  } catch (error) {
    console.error(error);
    return null;
  }
};
