import { Home } from "../pages/customer/Home";

export const customerRoutes = [
  {
    path: "/customer/home",
    component: Home,
    exact: true,
    protected: true,
    allowedRoles: "customer",
  },
];
