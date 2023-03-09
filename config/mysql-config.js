import mysql from "mysql2";

const pool = mysql
  .createPool({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "",
    database: "ecommerce",
  })
  .promise();

export default pool;
