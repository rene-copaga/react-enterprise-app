import React, { lazy, Suspense } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { LinearProgress } from '@material-ui/core';
import Dashboard from './layouts/dashboard-layout';
import Home from './views/pages/Home';
import NotFoundPage from './views/pages/NotFoundPage';

const Routes = () => {
  return (
    <Suspense fallback={<LinearProgress style={{  margin: '10rem'}} />}>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route 
          path={'/about'}
          component={lazy(() => import('./views/pages/AboutPage'))}
          exact
        />

        <Route
          path="/dashboard"
          render={ ({match: {path} } ) => (
            <Dashboard>
              <Switch>
                <Route 
                  path={path + '/'}
                  component={lazy(
                    () => import('./views/dashboard/dashboard-default-content'),
                  )}
                  exact
                />
                <Route
                  path={path + '/list-products'}
                  component={lazy(
                    () => import('./views/dashboard/product/ProductListView'),
                  )}
                  exact
                />
                <Route
                  path={path + '/create-product'}
                  component={lazy(
                    () => import('./views/dashboard/product/ProductCreateView'),
                  )}
                  exact
                />
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
