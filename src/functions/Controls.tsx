import React from 'react';
import { Switch, Route, Link, useRouteMatch } from 'react-router-dom';
import Topic from './Topic';

const Controls: React.FC = () => {
    let match = useRouteMatch();
    return (
        <div className="controls">
            <h2>Topics</h2>
            <ul>
                <li>
                    <Link to={`${match.url}/control-validation`}>Validation</Link>
                </li>
                <li>
                    <Link to={`${match.url}/control-interface`}>Main Control Panel</Link>
                </li>
                <li>
                    <Link to={`${match.url}/arm-control`}>Arm Control Panel</Link>
                </li>
            </ul>

            <Switch>
                <Route path={`${match.path}/:topicId`}>
                    <Topic />
                </Route>
                <Route path={match.path}>
                    <h3>Click below to validate your connection</h3>
                </Route>
            </Switch>
        </div>
    )
};

export default Controls;