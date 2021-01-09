import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './screens/home';
import Sobre from './screens/sobre';

export default function Routers() {
    return(
        <BrowserRouter>
            <Switch>
                <Route path='/' exact component={Home}/>
                <Route path='/sobre' exact component={Sobre}/>
            </Switch>
        </BrowserRouter>
    );
}