import { ChangeEvent } from "react";

export interface Params {
  role: "finder" | "seeker";
  page: "1" | "2" | "search";
}

export type AuthenticatedLayoutProps = {
  backgroundColor: string;
};

export type Fields = {
  status: string;
  title: string;
  category: string;
  description: string;
  photo: File | null;
  datetime: string;
  location: string;
};

export type FieldProps = {
  value?: any;
  error?: boolean;
  helperText?: string;
  onChange?: (e: React.ChangeEvent<any>) => void;
  setFieldValue?: (name: string, value: any) => void;
};

export type SearchBarProps = {
  role: "finder" | "seeker";
  query: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
};
