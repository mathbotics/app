import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import withSidebar from "./components/hocs/Sidebar/withSidebar";

// Pages
import {
  LoginPage,
  RegisterPage,
  DashboardPage,
  NotFoundPage,
  LessonsPage,
  SlidesPage
} from "./pages";

// Routes
import ProtectedRoute from "./routes/ProtectedRoute";
import { InvitationPage } from "./pages/InvitationPage";

export const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/login" component={LoginPage} />
        <Route path="/register/:token" component={RegisterPage} />
        <ProtectedRoute exact path="/" component={withSidebar(DashboardPage)} />
        <ProtectedRoute
          exact
          path="/admin"
          allowedRoles={["Admin"]}
          component={withSidebar(NotFoundPage)}
        />
        <ProtectedRoute
          exact
          path="/lessons"
          allowedRoles={["Admin", "Instructor"]}
          component={withSidebar(LessonsPage)}
        />
        <ProtectedRoute
          exact
          path="/lessons/:lessonId/slides"
          allowedRoles={["Admin", "Instructor"]}
          component={withSidebar(SlidesPage)}
        />
        <ProtectedRoute
          exact
          path="/invite"
          allowedRoles={["Admin"]}
          component={withSidebar(InvitationPage)}
        />
        <Route component={NotFoundPage} />
      </Switch>
    </BrowserRouter>
  );
};
