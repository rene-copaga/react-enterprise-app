import React, { lazy, Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';
import AboutPage from './views/pages/AboutPage';
import Home from './views/pages/Home';
import NotFoundPage from './views/pages/NotFoundPage';

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={AboutPage} />
      <Route exact path="/not-found" component={NotFoundPage} />
    </Switch>
  );
}
export default Routes;
