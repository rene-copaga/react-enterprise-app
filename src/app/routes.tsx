import React, { lazy, Suspense } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Dashboard from './layouts/dashboard-layout';
import DashboardDefaultContent from './views/dashboard/dashboard-default-content';
import SettingAndPrivacy from './views/dashboard/settings-and-privacy';
import AboutPage from './views/pages/AboutPage';
import Home from './views/pages/Home';
import NotFoundPage from './views/pages/NotFoundPage';

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/dashboard" render={ ({match: {path} } ) => (
        <Dashboard>
          <Switch>
            <Route exact path={path + '/'} component={DashboardDefaultContent} />
            <Route exact path={path + '/settings-and-privacy'} component={SettingAndPrivacy} />
          </Switch>
        </Dashboard>
      ) } />
      <Route exact path="/about" component={AboutPage} />
      <Route exact path="/not-found" component={NotFoundPage} />
      <Redirect exact from={'*'} to={'/not-found'} />
    </Switch>
  );
}
export default Routes;
