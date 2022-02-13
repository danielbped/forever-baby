import React from 'react';
import { Routes as Switch, Route } from 'react-router-dom';

import Main from './pages/Main.jsx';

const Routes = () => (
  <Switch>
    <Route exact path="/" element={ <Main /> } />
  </Switch>
);

export default Routes;
