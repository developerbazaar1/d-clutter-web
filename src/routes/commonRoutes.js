// src/routes/commonRoutes.js
import { LandingPage } from "../pages/landing-page/LandingPage";

export const commonRoutes = [
  {
    path: "/",
    component: LandingPage,
    exact: true,
    protected: false,
  },
];
