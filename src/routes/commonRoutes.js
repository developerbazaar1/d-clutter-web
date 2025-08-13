// src/routes/commonRoutes.js
import { AboutUs } from "../pages/about-us/AboutUs";
import { LandingPage } from "../pages/landing-page/LandingPage";

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
];
