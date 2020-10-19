import './custom.css'

import * as React from 'react';
import { Redirect, Route, Switch } from 'react-router';
import Layout from './components/Layout';
import Home from './components/Home';
import LogIn from './components/LogIn';
import Register from './components/Register';
import NotFound from './components/NotFound';

export default () => (
    <Layout>
        <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/login' component={LogIn} />
            <Route path='/register' component={Register} />
            <Route path="/404" component={NotFound} />
            <Redirect to="/404" />
        </Switch>
    </Layout>
);