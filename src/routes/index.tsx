import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './Route';

import SignIn from '../pages/SignIn';

import NotFound from '../pages/NotFound';

const Routes: React.FC = () => (
  <Switch>
    <Route isPrivate={false} path="/" component={SignIn} />

    {/* Page NotFount */}
    <Route isPrivate={false} component={NotFound} />
  </Switch>
);

export default Routes;
