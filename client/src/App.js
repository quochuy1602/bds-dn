import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './helps/store';
import jwt_decode from 'jwt-decode';
import setAuthToken from './helps/setAuthToken';
import { setCurrentUser, logoutUser } from './actions/authentication';

import Navbar from './components/Navbar';
import Register from './components/Register';
import Login from './components/Login';
import Home from './components/Home';
import Area from './components/Area';

if(localStorage.jwtToken) {
    setAuthToken(localStorage.jwtToken);
    const decoded = jwt_decode(localStorage.jwtToken);
    store.dispatch(setCurrentUser(decoded));
    const currentTime = Date.now() / 1000;
    if(decoded.exp < currentTime) {
        store.dispatch(logoutUser());
        window.location.href = '/login'
    }
}
class App extends Component {
    render() {
        return (
            <Provider store = { store }>
                <Router>
                    <div>
                        <Navbar />
                        <Route exact path="/" component={ Home } />
                        <Route exact path="/area" component={ Area } />
                        <div className="container">
                            <Route exact path="/register" component={ Register } />
                            <Route exact path="/login" component={ Login } />
                        </div>
                    </div>
                </Router>
            </Provider>
        );
    }
}

export default App;
