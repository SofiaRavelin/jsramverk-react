import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import { token } from "./Token.js";

//import ReportDetails from "./ReportDetails";
//import UpdateReport from "./UpdateReport";
//import CreateReport from "./CreateReport";

import '../style/reports.css';

//import One from './week/1';

export default class Reports extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        };
    }

    componentDidMount() {
        fetch('https://jsramverk-react-backend.sofiaravelin.ninja/reports/')
        .then((response) => response.json())
        .then(res => {
            this.setState({
                data: res
            })
        })
    }

    CreateLinks() {
        const links = [];
        this.state.data.map((report, index) =>
            links.push(<Link key={index} className="reportLinks" to={`/reports/week/${report.week}`}>Vecka{report.week}</Link>)
        );
        return links;
    }

    newReport() {
        if (token.token) {
            return (
                <div>
                    <Link className="newReport" to={`/reports/create`}>Skapa ny</Link>
                </div>
            )
        }
    }




    render() {
        if (token.token) {
            return (
                <div className="week-page">
                <h1>Redovisning</h1>
                <p>Här finns redovisningtexter efter varje genomfört kursmoment.</p>
                <div>{this.newReport()}</div>
                <div className="reportLinks">
                {this.CreateLinks()}
                </div>
                </div>
            )
        }
        return (
            <div className="week-page">
            <h1>Redovisning</h1>
            <p>Här finns redovisningtexter efter varje genomfört kursmoment.</p>
            <div className="reportLinks">
            {this.CreateLinks()}
            </div>
            </div>
        )
    }
}

//const Reports = () => {
//        return (
//            <div className="week-page">
//            <h1>Redovisning</h1>
//            <p>Här finns redovisningtexter efter varje genomfört ku//rsmoment.</p>
//            <li><a href="https://jsramverk.se/#repo">Kursrepo</a></li>
//            <li><a href="https://github.com/SofiaRavelin/jsramverk-react">GitHub</a></li>
//            <li><a href="https://github.com/SofiaRavelin/jsramverk-react/blob/master/README.md">README.md</a></li>
//                <div>
//                < One />
//                </div>
//            </div>
//        );
//};

//export default Reports;
