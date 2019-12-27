import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Dashboard from './containers/dashboard/Dashboard';
import NotFound from './components/NotFound';
import ProjectDetails from './components/projects/ProjectDetails';
import SignIn from './containers/auth/SignIn';
import SignUp from './containers/auth/SignUp';
import CreateProject from './containers/projects/CreateProject';

export default function Routes() {
  return (
    <div>
      <Switch>
        <Route path="/" exact component={Dashboard} />
        <Route path="/signin" exact component={SignIn} />
        <Route path="/signup" exact component={SignUp} />
        <Route path="/createproject" exact component={CreateProject} />
        <Route path="/project/:id" exact component={ProjectDetails} />
        {/* routes ใดๆที่หาไม่เจอ ใช้ NotFound route */}
        <Route component={NotFound} />
      </Switch>
    </div>
  );
}
