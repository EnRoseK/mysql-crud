import mysql from "mysql2";

const pool = mysql
  .createPool({
    host: "localhost",
    port: 3307,
    user: "root",
    password: "",
    database: "ecommerce_evening",
  })
  .promise();

export default pool;
