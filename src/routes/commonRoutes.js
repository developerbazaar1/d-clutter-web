// src/routes/commonRoutes.js
import { AboutUs } from "../pages/about-us/AboutUs";
import { LandingPage } from "../pages/landing-page/LandingPage";
import { Login } from "../pages/Login";
import { SignIn } from "../pages/SignIn";

export const commonRoutes = [
  {
    path: "/",
    component: LandingPage,
    exact: true,
    protected: false,
  },
  {
    path: "/about-us",
    component: AboutUs,
    exact: true,
    protected: false,
  },
  {
    path: "/login",
    component: Login,
    exact: true,
    protected: false,
  },
  {
    path: "/sign-up",
    component: SignIn,
    exact: true,
    protected: false,
  },
];
