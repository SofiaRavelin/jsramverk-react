import React, { Component } from 'react';
//import { Link } from 'react-router-dom';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';

import '../style/navigation.css';
//import App from '../App';
export default class Navigation extends Component {
    render() {
        return (
            <nav>
                <div className="nav-links">
                    <Link to="/" path="/me">Hem</Link>
                    <Link to="/reports" path="/reports">Redovisningar</Link>
                    <Link to="/login" path="/login">Logga in</Link>
                    <Link to="/register" path="/register">Registrera</Link>
                </div>
            </nav>
        )
    };

};
