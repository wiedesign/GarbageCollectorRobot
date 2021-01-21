import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './App.css';

import Home from './pages/Home';

import Footer from './components/Footer';
import Navbar from './components/Navbar';

export default class App extends Component {
    render() {
        return (
            <Router>
                <Navbar />
                <Switch>
                    <Route path="/" exact component={Home} />
                </Switch>
                <Footer />
            </Router>
        );
    }
}
