import React, { Component } from 'react';
import { Link } from "react-router-dom";

import { token } from "./Token.js";

class ReportDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            week: '',
            content: ''
        };
    }

    componentDidMount() {
        let week = this.props.match.params.week;
        fetch('http://localhost:1337/reports/week/' + week)
        .then(response => response.json())
        .then(data => {
            this.setState({
                week: data.data.week,
                content: data.data.content
             })
        })
    }

    createLink() {
        if (token.token) {
            return (
                <div>
                    <Link className="reportLinks" to={`/reports/update/` + this.props.match.params.week}>Redigera</Link>
                </div>
            )
        }
    }

    //componentDidMount() {
    ////        .then(res => res.json())
    //        .then(res => this.setState({ content: res.data.content }));
    //}

    render() {
        return (
            <div>
                {this.createLink()}
                <h1>{this.state.week}</h1>
                <div>{this.state.content}</div>
                <Link to="/reports">Tillbaka</Link>
            </div>
        );
    }
}

export default ReportDetails;
