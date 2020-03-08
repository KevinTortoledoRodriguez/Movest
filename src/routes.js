import React from 'react';
import {Switch, Route } from 'react-router-dom';
import Login from './components/Login/Login';
import Signup from './components/Signup/Signup';
import Request from './components/Request/Request';
import Home from './components/Home/Home';
import Header from './components/Header/Header';

import {Grid, GridRow, GridColumn} from 'semantic-ui-react';
export const RoutesApp = (
    <Grid>
        <GridRow>
            <GridColumn>
                <Header />
            </GridColumn>
        </GridRow>
        <GridRow>
            <GridColumn>
            <Switch>
                <Route path="/login" exact component={Login} />
                <Route path="/" exact component={Login} />
                <Route path="/signup" exact component={Signup} />
                <Route path="/request" exact component={Request} />
                <Route path="/Home" exact component={Home}/>
            </Switch>
            </GridColumn>
        </GridRow>
    </Grid>
)

/**/