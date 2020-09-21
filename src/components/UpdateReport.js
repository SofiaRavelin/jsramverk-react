import React, { Component } from 'react';
import { Link } from "react-router-dom";

import { token } from "./Token.js";

export default class UpdateReport extends Component {
    constructor(props) {
        super(props)

        this.state = {
            week: "",
            content: ""
        }
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


    onSubmit = (event) => {
        event.preventDefault();

        const report = {
            'week': this.state.week,
            'content': this.state.content
        }
        let week = this.props.match.params.week;
        console.log(week);
        console.log(this.state.content);
        fetch('http://localhost:1337/reports/update/' + week, {
            method: "POST",
            headers: {
                'Content-type': 'application/json',
                'x-access-token': token.token
            },
            body: JSON.stringify(report)
        })
        //.then((response) => response.json())
        .then(response => {
            if (response.status === 201) {
                this.props.history.push("/reports/week/" + this.state.week)
            } else {
                this.setState({ status: 'Gick inte.' });
            };
        });

    };

    onChange = event => {
        event.preventDefault();
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    render() {
        return(
            <div>
                <article className="article-standard">
                    <h3>Redigera text</h3>
                    <form onSubmit={this.onSubmit}>
                        <p>Vecka {this.state.week}</p>
                        <p>Text:</p>
                        <textarea value={this.state.content} name='content' required onChange={this.onChange}/>
                        <br/><br/>
                        <input className='button' type='submit' value='Spara' />
                    </form>
                <Link to={`/reports/week/${this.props.match.params.week}`}>Tillbaka</Link>
                </article>
            </div>
        );
    }
}
