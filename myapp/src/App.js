import React from 'react';
import './App.css';
import { NavLink, Switch, Route } from 'react-router-dom';

const App = () => (
  <div className='app'>
    <h1>WiE Garbage Collector Robot</h1>
    <Navigation />
    <Main />
  </div>
);

const Navigation = () => (
  <nav>
    <ul>
      <li><NavLink exact activeClassName="current" to='/'>About Us</NavLink></li>
      <li><NavLink exact activeClassName="current" to='/robotvalidation'>Robot Control</NavLink></li>
    </ul>
  </nav>
);

const Home = () => (
  <div className='about'>
    <h1>WiE Design welcomes you to...</h1>
    <p> Ipsum dolor dolorem consectetur est velit fugiat. Dolorem provident corporis fuga saepe distinctio ipsam? Et quos harum excepturi dolorum molestias?.</p>
  </div>
);

const GetStarted = () => (
  <div className='robotvalidation'>
    <h1>Get Started</h1>
    <p>In order to use the WiE robot, you will need a couple things:</p>
  </div>
);

const Main = () => (
  <Switch>
      <Route exact path='/' component={Home}></Route>
      <Route exact path='/robotvalidation' component={GetStarted}></Route>
  </Switch>
);

export default App;
