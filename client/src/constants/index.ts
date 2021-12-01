import { Fields } from "../types";

export const categories: string[] = [
  "Other",
  "Cell Phone",
  "Laptop",
  "Headphones",
  "Keys",
  "Wallet/Purse",
  "Backpack",
];

export const initialValues: Fields = {
  status: "",
  title: "",
  category: "Other",
  description: "",
  photo: null,
  datetime: "",
  location: "",
};
