import { FC } from "react";
import { Switch, Route, Redirect, useLocation } from "react-router";
import { TransitionGroup, CSSTransition } from "react-transition-group";

import { RouteName } from "../../constants";
import { routes } from "../../router";

const AppRouter: FC = () => {
  const location = useLocation();

  return (
    <TransitionGroup>
      <CSSTransition key={location.key} timeout={250} classNames="fade">
        <Switch location={location}>
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
      </CSSTransition>
    </TransitionGroup>
  );
};

export default AppRouter;
