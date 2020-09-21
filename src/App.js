import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Me from './components/me';
import Reports from './components/reports';
//import One from './reports/week/1';
import Error from './components/error';
import Login from './components/login';
import Register from './components/register';
import Navigation from './components/navigation';
import ReportDetails from './components/ReportDetails';
import CreateReport from './components/CreateReport';
import UpdateReport from './components/UpdateReport';
//import logo from './logo.svg';
//import './App.css';

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <div>
                    <Navigation />
                    <Switch>
                        <Route path="/" component={Me} exact/>
                        <Route path="/reports" component={Reports} exact />
                        <Route path="/reports/week/:week" component={ReportDetails}/>
                        <Route path="/reports/create" component={CreateReport}/>
                        <Route path="/reports/update/:week" component={UpdateReport}/>
                        <Route path="/login" component={Login} exact />
                        <Route path="/register" component={Register} exact />
                        <Route component={Error} exact/>
                        </Switch>
                </div>
            </BrowserRouter>
        );
    }
}

export default App;
