import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './Route';

import Dashboard from '../pages/Dashboard';
import Signin from '../pages/Signin';
import SignUp from '../pages/SignUp';
import AddHoras from '../pages/AddHoras';
import ReportPage from '../pages/ReportPage';

export default function Routes() {
  return (
    <Switch>
      <Route path="/dashboard" exact component={Dashboard} isPrivate />
      <Route path="/" exact component={Dashboard} isPrivate />
      <Route path="/signin" component={Signin} />
      <Route path="/signup" component={SignUp} />
      <Route path="/cadastrar-horas" component={AddHoras} isPrivate />
      <Route path="/relatorio" component={ReportPage} isPrivate />
    </Switch>
  );
}
