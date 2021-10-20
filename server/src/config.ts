import * as dotenv from "dotenv";
dotenv.config();

export default {
  dev : process.env.DEV,
  port: process.env.PORT,

  mysqlPort: process.env.MYSQL_PORT,
  mysqlHost: process.env.MYSQL_HOST,
  mysqlPasswrod: process.env.MYSQL_PASSWORD,
  mysqlUserName: process.env.MYSQL_USERNAME,
  mysqlDatabase: process.env.MYSQL_DATABASE,

  jwtScreet: process.env.JWT_SECREET,
  hashRound: process.env.HASH_ROUND,
}