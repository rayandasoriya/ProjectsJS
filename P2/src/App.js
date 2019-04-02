import React, { Component } from 'react';
import { MuiThemeProvider } from '@material-ui/core';
import 'typeface-roboto'
import { theme } from './settings'
import { HashRouter as Router, Route, Redirect, Switch } from 'react-router-dom'
import People from './components/views/People';
import PeopleSingle from './components/views/PeopleSingle';

class App extends Component {
    render() {
        return (
            <Router>
                <MuiThemeProvider theme={theme}>      
                    <Switch>
                        <Redirect exact from="/" to="/people" />
                        <Route exact path="/people" component={People} />
                        <Route path="/people/:id" component={PeopleSingle} />
                    </Switch>
                </MuiThemeProvider>
            </Router>
        );
    }
}

export default App;
