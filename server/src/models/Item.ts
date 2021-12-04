import { DataTypes, Model, Optional } from "sequelize";
import sequelize from "../db";

interface ItemAttributes {
  id: number;
  status: string;
  title: string;
  category: string;
  description: string;
  photo: string;
  datetime: string;
  location: string;
}

interface ItemCreationAttributes extends Optional<ItemAttributes, "id"> {}

class Item extends Model<ItemAttributes, ItemCreationAttributes> implements ItemAttributes {
  id!: number;
  status!: string;
  title!: string;
  category!: string;
  description!: string;
  photo!: string;
  datetime!: string;
  location!: string;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

export const ItemModel = Item.init(
  {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    status: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    category: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
    },
    photo: {
      type: DataTypes.STRING,
    },
    datetime: {
      type: DataTypes.DATE,
    },
    location: {
      type: DataTypes.STRING,
    },
  },
  {
    sequelize,
    modelName: "Item",
  }
);
