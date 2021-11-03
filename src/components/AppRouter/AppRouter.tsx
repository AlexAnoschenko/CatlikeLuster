import { FC } from 'react';
import { Switch, Route, Redirect } from 'react-router';
import { RouteName, routes } from '../../router';

const AppRouter: FC = () => {
  return (
    <Switch>
      {routes.map((route) => (
        <Route
          path={route.path}
          component={route.component}
          exact={route.exact}
          key={route.path}
        />
      ))}
      <Redirect to={RouteName.LANDING_PAGE} />
    </Switch>
  );
};

export default AppRouter;
