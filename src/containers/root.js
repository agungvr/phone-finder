import React, { lazy } from 'react';
import {
  Switch, Route
} from 'react-router-dom';

const Home = lazy(() => import('./home'));

const PageComponent = () => (
  <Switch>
    <Route exact path={'/'} component={Home}/>
  </Switch>
);


export default PageComponent;
