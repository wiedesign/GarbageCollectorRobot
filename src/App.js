import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './Home.scss';
import './Controls.scss';
import './Demo.scss';

import Controls from './pages/Controls';
import Home from './pages/Home';

import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Demo from './pages/Demo';

export default class App extends Component {
    render() {
        return (
            <Router>
                <Navbar />
                <Switch>
                    <Route path="/controls" exact component={Controls} />
                    <Route path="/demo" exact component={Demo} />
                    <Route path="/" exact component={Home} />
                </Switch>
                <Footer />
            </Router>
        );
    }
}
