import React, {Component} from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams} from 'react-router-dom';


class App extends Component {
  render(){return (
    <Router>
      <div className="App">
      <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/robot-controls">Get Started</Link>
          </li>
        </ul>

        <Switch>
          <Route path="/about">
            <AboutUs />
          </Route>
          <Route path="/robot-controls">
            <Controls />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
    );
  }
}

class Home extends Component{
  render() {
    return <h2>WiE Garbage Collector Robot</h2>; 
  }
}

class AboutUs extends Component{
  render() {
    return <h2>Women in Engineering SFU Design Team</h2>
  }
}

function Controls() {
  let match = useRouteMatch();

  return (
    <div>
      <h2>Topics</h2>
      <ul>
        <li>
          <Link to={`${match.url}/control-validation`}>Validation</Link>
        </li>
        <li>
          <Link to={`${match.url}/control-interface`}>Main Control Panel</Link>
        </li>
        <li>
          <Link to={`${match.url}/arm-control`}>
            Arm Control Panel
          </Link>
        </li>
      </ul>

      <Switch>
        <Route path={`${match.path}/:topicId`}>
          <Topic />
        </Route>
        <Route path={match.path}>
          <h3>Please select a topic.</h3>
        </Route>
      </Switch>
    </div>
  );
}

function Topic() {
  let { topicId } = useParams();
  return <h3>Requested topic ID: {topicId}</h3>;
}

export default App;