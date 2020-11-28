import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';

import PhaseOne from 'views/PhaseOne';
import NotFound from 'views/NotFound';

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact component={PhaseOne} path="/" />
        <Route component={NotFound} path="*" />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
