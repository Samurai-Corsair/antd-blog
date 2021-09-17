import Home from "../pages/Home/Home";
import { FC } from "react";
import { SignIn } from "../authPages/SignIn/SignIn";
import {SignUp} from "../authPages/SignUp/SignUp";

export interface IRoute {
  name: string;
  exact: boolean;
  path: string;
  component: FC<{}>;
  private: boolean;
}

export type TPrivateRoute = Omit<IRoute, "name" | "private">;

export const routes: IRoute[] = [
  {
    name: "Home",
    exact: true,
    path: "/",
    component: Home,
    private: false,
  },
  {
    name: "Sign-in",
    exact: true,
    path: "/sign-in",
    component: SignIn,
    private: false,
  },
  {
    name: "Sign-up",
    exact: true,
    path: "/sign-up",
    component: SignUp,
    private: false,
  },
];
