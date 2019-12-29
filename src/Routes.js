import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { PrivateRoute } from './components/utils/PrivateRoute';
import Dashboard from './containers/dashboard/Dashboard';
import NotFound from './pages/NotFound';
import ProjectDetails from './components/projects/ProjectDetails';
import SignIn from './containers/auth/SignIn';
import SignUp from './containers/auth/SignUp';
import CreateProject from './containers/projects/CreateProject';

export default function Routes() {
  return (
    <div>
      <Switch>
        <PrivateRoute path="/" exact component={Dashboard} />
        <Route path="/login" component={SignIn} />
        <Route path="/register" component={SignUp} />
        <PrivateRoute path="/createproject" component={CreateProject} />
        <PrivateRoute path="/project/:id" component={ProjectDetails} />
        {/* routes ใดๆที่หาไม่เจอ ใช้ NotFound route */}
        <Route component={NotFound} />
      </Switch>
    </div>
  );
}
