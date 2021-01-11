import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './App.css';

import About from './pages/About';
import Home from './pages/Home';

import Footer from './components/Footer';
import Navbar from './components/Navbar';

import Controls from './functions/Controls';

export default class App extends Component {
    render() {
        return (
            <Router>
                <Navbar />
                <Switch>
                    <Route path="/about" component={About} />
                    <Route path="/robot-controls" component={Controls} />

                    <Route path="/" exact component={Home} />
                </Switch>
                <Footer />
            </Router>
        );
    }
}
