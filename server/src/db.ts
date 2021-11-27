import { Sequelize } from "sequelize";
import config from "./config"

export default new Sequelize({
  dialect: "sqlite",
  storage: config.DATABASE.PATH,
  logging: false,
});