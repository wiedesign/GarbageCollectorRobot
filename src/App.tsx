import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './Home.scss';
import './Controls.scss';
import './Sponsorship.scss'
import Controls from './pages/Controls';
import Home from './pages/Home';
import Footer from './components/Footer';
import NavBar from './components/NavBar';
import Sponsorship from './pages/Sponsorship';

const App: React.FC = () => {
    return(
        <Router>
            <NavBar />
            <Switch>
                <Route path="/controls" exact component={Controls} />
                <Route path="/" exact component={Home} />
                <Route path="/sponsorship" exact component={Sponsorship} />
            </Switch>
            <Footer />
        </Router>
    );
}

export default App;