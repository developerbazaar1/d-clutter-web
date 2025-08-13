// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useSelector } from "react-redux";
import { commonRoutes } from "./routes/commonRoutes";
// import { customerRoutes } from "./routes/customerRoutes";
// import { serviceProviderRoutes } from "./routes/serviceProviderRoutes";
import AuthGuard from "./components/AuthGuard.jsx";
import RoleGuard from "./components/RoleGuard.jsx";

function App() {
  const { isAuthenticated, role } = useSelector((state) => state.auth);

  let routes = commonRoutes; // Start with common routes

  // if (role === "customer") {
  //   routes = [...routes, ...customerRoutes]; // Add customer-specific routes
  // } else if (role === "serviceProvider") {
  //   routes = [...routes, ...serviceProviderRoutes]; // Add service provider-specific routes
  // }

  if (!isAuthenticated) {
    routes = [...routes, ...commonRoutes]; // Add common routes if not authenticated
  }

  return (
    <Router>
      <Routes>
        {routes.map((route, index) => {
          const Component = route.component;
          if (route.protected) {
            return (
              <main>
                <Route
                  key={index}
                  path={route.path}
                  element={
                    <AuthGuard>
                      <RoleGuard allowedRoles={route.allowedRoles}>
                        <Component />
                      </RoleGuard>
                    </AuthGuard>
                  }
                />
              </main>
            );
          }
          return (
            <Route key={index} path={route.path} element={<Component />} />
          );
        })}
      </Routes>
    </Router>
  );
}

export default App;
