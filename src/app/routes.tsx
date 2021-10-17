import React, { lazy, Suspense } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { LinearProgress } from '@material-ui/core';
import Dashboard from './layouts/dashboard-layout';
import DashboardDefaultContent from './views/dashboard/dashboard-default-content';
import SettingAndPrivacy from './views/dashboard/settings-and-privacy';
import AboutPage from './views/pages/AboutPage';
import Home from './views/pages/Home';
import NotFoundPage from './views/pages/NotFoundPage';

const Routes = () => {
  return (
    <Suspense fallback={<LinearProgress style={{  margin: '10rem'}} />}>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path={'/about'} component={lazy(() => import('./views/pages/AboutPage'))} />
        <Route path="/dashboard" render={ ({match: {path} } ) => (
          <Dashboard>
            <Switch>
              <Route exact path={path + '/'} component={lazy(() => import('./views/dashboard/dashboard-default-content'),)} />
              <Route exact path={path + '/settings-and-privacy'} component={SettingAndPrivacy} />
            </Switch>
          </Dashboard>
        ) } />
        <Route exact path="/not-found" component={NotFoundPage} />
        <Redirect exact from={'*'} to={'/not-found'} />
      </Switch>
    </Suspense>
  );
}
export default Routes;
