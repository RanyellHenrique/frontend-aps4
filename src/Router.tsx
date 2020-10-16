import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from './core/components/Header';
import Home from './pages/Home';

const Router = () => (
    <BrowserRouter>
        <Header/>
        <Switch>
            <Route path="/" exact>
                <Home/>
            </Route>
            <Route path="/coordinates">
                <h1>Cordenadas</h1>
            </Route>
            <Route path="/ordinations">
                <h1>Ordenações</h1>
            </Route>
        </Switch>
    </BrowserRouter>

);


export default Router;