import React, { Component } from 'react';
import { Link } from "react-router-dom";

import { token } from "./Token.js";

export default class CreateReport extends Component {

    constructor(props) {
        super(props);
        this.state = {
            week: '',
            content: ''
        };
    }

    onChange = (event) => {
        event.preventDefault();
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    onSubmit = (event) => {
        event.preventDefault();


        const report = {
            week: this.state.week,
            content: this.state.content
        }

        fetch("http://localhost:1337/reports/", {
            method: 'POST',
            headers: {
                'x-access-token': token.token,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(report)
        })
        .then(res => {
            if (res.status === 201) {
                this.props.history.push("/reports/week/" + this.state.week)
            } else {
                this.setState({ status: "Kunde inte skapa ny text."})
            }
        })
        // then(Reports.updateState(this.state.status))
        .catch((error) => {
            console.error('Error:', error);
        });
    }

    render() {
        if (token.token) {
            return (
                <div>
                    <h2>Skapa ny redovisning</h2>
                    <form onSubmit={this.onSubmit}>

                        <label className="week">Vecka</label>
                        <br />
                        <input type="number" name="week" value={this.state.week} onChange={this.onChange} required />
                        <br />
                        <label className="content">Text</label>
                        <br />
                        <textarea type="text" name="content" value={this.state.content} onChange={this.onChange} />
                        <br />
                        <button type="submit">Spara</button>
                    </form>
                    <Link to="/reports">Tillbaka till rapporter</Link>
                </div>
            );
        }
        return (
            <div>
                <h1>OJOJO</h1>
            </div>
        )
    }
}
