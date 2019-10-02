import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
import reducers from './reducers';

import Home from '../src/pages/Home';
import Users from '../src/pages/UsersPage';
import CreateSurvey from '../src/pages/CreateSurvey';
import Login from '../src/pages/Login';
import SignupPage from '../src/pages/SignupPage';
import SurveyDetailPage from '../src/pages/SurveyDetailPage';

const store = createStore(reducers, {}, applyMiddleware(reduxThunk));

const routing = (
  <Provider store={store}>
    <Router>
      <div>
        <Route path='/' component={App} />
        <Route path='/home' component={Home} />
        <Route path='/users' component={Users} />
        <Route path='/create' component={CreateSurvey} />
        <Route path='/login' component={Login} />
        <Route path='/signup' component={SignupPage} />
        <Route path='/detail/:key' component={SurveyDetailPage} />
      </div>
    </Router>
  </Provider>
);

ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
