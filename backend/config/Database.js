import { Sequelize } from "sequelize";

const db = new Sequelize("auth_db", "root", "", {
  host: "localhost",
  dialect: "mysql",
});
// auth_db is my database in mysql to connectivity
export default db;
