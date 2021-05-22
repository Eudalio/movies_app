import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Movies from './pages/Movies';
import Details from './pages/Details';

function Routes() {
    return (
        <Switch>
            <Route path="/" exact component={Movies} />
            <Route path="/details" component={Details} />
        </Switch>
    );
}

export default Routes;