import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import withSidebar from "./components/hocs/Sidebar/withSidebar";

// Pages
import { LoginPage, DashboardPage } from "./components/pages";

// Routes
import ProtectedRoute from "./routes/ProtectedRoute";
import NotFoundPage from "./components/pages/NotFoundPage";

export const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/login" component={LoginPage} />
        <ProtectedRoute exact path="/" component={withSidebar(DashboardPage)} />
        <ProtectedRoute
          exact
          path="/admin"
          allowedRoles={["Admin"]}
          component={withSidebar(NotFoundPage)}
        />
        <ProtectedRoute
          exact
          path="/courses"
          component={withSidebar(NotFoundPage)}
        />
        <Route component={NotFoundPage} />
      </Switch>
    </BrowserRouter>
  );
};
