import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from '../pages/Home';
import Layout from './Layout';
import BadgeNew from '../pages/BadgeNew';
import Badges from '../pages/Badges';
import NotFound from '../pages/NotFound';
import BadgeEdit from '../pages/BadgeEdit';
import BadgeDetails from '../pages/BadgeDetails';
import BadgeDetailsContainer from '../pages/BadgeDetailsContainer';

function App() {
    return (
        <BrowserRouter>
            <Layout>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/badges" component={Badges} />
                <Route exact path="/badges/new" component={BadgeNew} />
                <Route exact path="/badges/:badgeId/edit" component={BadgeEdit} />
                <Route exact path="/badges/:badgeId" component={BadgeDetailsContainer} />
                <Route component={NotFound} />
            </Switch>
            </Layout>
        </BrowserRouter >
    );
}

export default App;