import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import {
  LogoutOutlined,
} from '@ant-design/icons';

import withSidebar from './components/hocs/Sidebar/withSidebar';

// Pages
import {
  LoginPage,
  RegisterPage,
  DashboardPage,
  NotFoundPage,
  LessonsPage,
  SlidesPage,
  AdminPage,
  CoursesPage,
  EditCoursePage,
  LessonPage,
  CoursePage,
} from './pages';

// Routes
import ProtectedRoute from './routes/ProtectedRoute';

export const App: React.FC = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/login" component={LoginPage} />
      <Route path="/register/:token" component={RegisterPage} />
      <ProtectedRoute exact path="/" component={withSidebar(DashboardPage)} />
      <ProtectedRoute
        exact
        path="/admin"
        allowedRoles={['Admin']}
        component={withSidebar(AdminPage)}
      />
      <ProtectedRoute
        exact
        path="/lessons"
        allowedRoles={['Admin', 'Instructor']}
        component={withSidebar(LessonsPage)}
      />
      <ProtectedRoute
        exact
        path="/lessons/:lessonId/slides"
        allowedRoles={['Admin']}
        component={withSidebar(SlidesPage)}
      />
      <ProtectedRoute
        exact
        path="/courses"
        allowedRoles={['Admin', 'Instructor', 'Student']}
        component={withSidebar(CoursesPage)}
      />
      <ProtectedRoute
        exact
        path="/courses/:courseId/edit"
        allowedRoles={['Admin', 'Instructor']}
        component={withSidebar(EditCoursePage)}
      />
      <ProtectedRoute
        exact
        path="/courses/:courseId/lessons/:lessonId"
        component={withSidebar(LessonPage)}
      />
      <ProtectedRoute
        path="/courses/:courseId"
        allowedRoles={['Admin', 'Instructor', 'Student']}
        component={withSidebar(CoursePage)}
      />
      {/* <Route 
        path='/logout'
        component={withSidebar(
          (): JSX.Element => {
            console.log('clicking');
            return (
            <span>trying to log out</span>
            
            )
          })}
      /> */}
      <Route component={NotFoundPage} />
    </Switch>
  </BrowserRouter>
  );
