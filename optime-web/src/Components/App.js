import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Navigation from './Navigation';
import LandingPage from '../Pages/Landing';
import SignUpPage from '../Pages/SignUp';
import SignInPage from '../Pages/SignIn';
import PasswordForgetPage from '../Pages/PasswordForget';
import HomePage from '../Pages/Home';
import AccountPage from './Account';

import * as routes from '../Constants/Routes';

const App = () =>
    <Router>
        <div>
            <Navigation />
            <hr/>
            <Route
                exact path={routes.LANDING}
                component={LandingPage}
            />
            <Route
                exact path={routes.SIGN_UP}
                component={SignUpPage}
            />
            <Route
                exact path={routes.SIGN_IN}
                component={SignInPage}
            />
            <Route
                exact path={routes.PASSWORD_FORGET}
                component={PasswordForgetPage}
            />
            <Route
                exact path={routes.HOME}
                component={HomePage}
            />
            <Route
                exact path={routes.ACCOUNT}
                component={AccountPage}
            />
        </div>
    </Router>

export default App;