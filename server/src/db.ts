import { Sequelize } from "sequelize";
import User from "./models/User";
import Item from "./models/Item";

export const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: "database.sqlite",
  logging: false,
});

export const UserModel = User(sequelize, Sequelize);
export const ItemModel = Item(sequelize, Sequelize);
