import React from 'react';
import { Route, Redirect } from 'react-router-dom';

function PublicRoute({ component: Component, authenticated, ...rest }) {
    let returnUrl = '/';
    if (rest.location.state && rest.location.state.from && rest.location.state.from.pathname)
        returnUrl = rest.location.state.from.pathname;
    return (
        <Route
            {...rest}
            render={(props) => authenticated === false
                ? <Component {...props} />
                : <Redirect to={returnUrl} />}
        />
    )
}

export default PublicRoute;
