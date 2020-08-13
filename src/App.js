import React, { Component } from 'react'
import {
    BrowserRouter as Router, 
    Route, 
    Switch,
    Link,
} from 'react-router-dom';
import ListPage from './ListPage.js';
import FormPage from './FormPage';
import DetailPage from './DetailPage';

export default class App extends Component {
    render() {
        return (
            <div>
                <Router>
                    <div className="sidebar">
                        <Link to='/create'>Create Pizza</Link>
                        <Link to='/'>List</Link>
                    </div>
                    <Switch>
                        <Route 
                            path="/" 
                            exact
                            render={(routerProps) => <ListPage {...routerProps} />} 
                        />
                        <Route 
                            path="/create" 
                            exact
                            render={(routerProps) => <FormPage {...routerProps} />} 
                        />
                        <Route 
                            path="/detail/:id" 
                            exact
                            render={(routerProps) => <DetailPage {...routerProps} />} 
                        />
                    </Switch>
                </Router>
            </div>
        )
    }
}