import React from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Error from './View/Error/Error';
import Home from './View/Home/Home';
import Notqualified from './View/NotQualified/Notqualified';
import Success from './View/Success/Success';

export default function Routers() {
    return (
        <>
        <Router>
            <Switch>
                <Route exact path="/">{Home}</Route>
                <Route exact path="/success">{Success}</Route>
                <Route exact path="/notqualified">{Notqualified}</Route>
                <Route path="*">{Error}</Route>
            </Switch>
        </Router>
            
        </>
    )
}
