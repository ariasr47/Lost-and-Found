import { ChangeEvent, CSSProperties } from "react";
import store from "../store";

export interface Params {
  role: "finder" | "seeker";
  page: "1" | "2" | "search";
}

export type AuthenticatedLayoutProps = {
  backgroundColor: string;
};

export type Fields = {
  status?: string;
  title?: string;
  category?: string;
  description?: string;
  photo?: File;
  datetime?: string;
  location?: string;
};

export type SearchBarProps = {
  role: "finder" | "seeker";
  query: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

export type GoogleMapProps = {
  center?: {
    lat: number;
    lng: number;
  };
  style?: CSSProperties;
  onDrag?: (e: google.maps.MapMouseEvent) => void;
};

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
