import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './Route';

import SignIn from '../pages/SignIn';

import NotFound from '../pages/SignIn copy';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" component={SignIn} />

    {/* Page NotFount */}
    <Route component={NotFound} />
  </Switch>
);

export default Routes;
