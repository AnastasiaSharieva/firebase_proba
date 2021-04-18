import React, { useContext } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { privatekRoutes, publickRoutes } from '../routes';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Context } from '../index';


const AppRoute = () => {
    const { auth } = useContext(Context);
    const [user] = useAuthState(auth);

    return user ?
        (
            <Switch>
                {privatekRoutes.map(({ path, Component }) =>
                    <Route key={path} path={path} component={Component} exact={true} />
                )}
                <Redirect to='/comments' />
            </Switch>
        )
        :
        (
            <Switch>
                {publickRoutes.map(({ path, Component }) =>
                    <Route key={path} path={path} component={Component} exact={true} />
                )}
                <Redirect to='/login' />
            </Switch>
        )
}


export default AppRoute;