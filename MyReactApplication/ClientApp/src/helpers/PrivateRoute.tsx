import React from 'react';
import { Route, Redirect } from 'react-router-dom';

export const PrivateRoute = ({ component, ...rest }: any) => (
    <Route {...rest} render={props => (
        localStorage.getItem('user')
            ? React.createElement(component, props)
            : <Redirect to={{ pathname: '/login' }} />
    )} />
);