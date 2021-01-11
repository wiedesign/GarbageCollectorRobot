import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './App.css';

import Home from './pages/Home';
import Timeline from './pages/Timeline';
import ContactUs from './pages/ContactUs';

import Footer from './components/Footer';
import Navbar from './components/Navbar';

import Controls from './functions/Controls';

export default class App extends Component {
    render() {
        return (
            <Router>
                <Navbar />
                <Switch>
                    <Route path="/robot" component={Controls} />
                    <Route path="/contact-us" component={ContactUs} />
                    <Route path="/timeline" component={Timeline} />

                    <Route path="/" exact component={Home} />
                </Switch>
                <Footer />
            </Router>
        );
    }
}
