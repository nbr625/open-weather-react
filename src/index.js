import React  from 'react';
import ReactDOM from'react-dom';

import {Route, Router, IndexRoute, hashHistory} from 'react-router';

import Main from './components/Main.jsx';
import Weather from './components/Weather.jsx';


ReactDOM.render(
    <Router history={hashHistory}>
        <Route path="/" component={Main}>
            <IndexRoute component={Weather}/>
        </Route>
    </Router>,
    document.getElementById('app')
);