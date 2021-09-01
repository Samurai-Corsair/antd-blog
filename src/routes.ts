import Home from "./pages/Home/Home";
import {FC} from "react";

export interface IRoute {
  name: string
  exact: boolean
  path: string
  page: FC<{}>
  private: boolean
}

export const routes = [
  {
    name: "Home",
    exact: true,
    path: "/",
    page: Home,
    private: false
  },
];
