import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './Route';

import SignIn from '../pages/SignIn';

import NotFound from '../pages/NotFound';

const Routes: React.FC = () => (
  <Switch>
    <Route isPrivate path="/" component={SignIn} />

    {/* Page NotFount */}
    <Route isPrivate component={NotFound} />
  </Switch>
);

export default Routes;
