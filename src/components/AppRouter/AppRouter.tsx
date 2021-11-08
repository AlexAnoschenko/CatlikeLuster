import { FC } from 'react';
import { Switch, Route, Redirect } from 'react-router';

import { RouteName } from '../../constants';
import { routes } from '../../router';
import { useTypedSelector } from '../../hooks/useTypedSelector';

const AppRouter: FC = () => {
    const { language } = useTypedSelector((state) => state.language);

    console.log(language);

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
