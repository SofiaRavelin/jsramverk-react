import React, { Component } from 'react';
//import { Redirect, Link } from "react-router-dom";

export default class Register extends Component {
    constructor() {
        super();
        this.state = {
            email: "",
            password: "",
            status: "",
            redirect: null
        };
    }

    changeHandler = (e) => {
        e.preventDefault();
        //let name = e.target.name;
        //let value = e.target.value;
        this.setState({
            [e.target.name]: e.target.value})
    };

    handleSubmit = e => {
        e.preventDefault();

        //console.log(this.state);

        const user = {
            email: this.state.email,
            password: this.state.password
        }


        fetch('https://jsramverk-react-backend.sofiaravelin.ninja/register/', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email: this.state.email,
                password: this.state.password
            })
        })
            .then(res => res.json())
            .then(response => {
                console.log(response);
                if (response.data) {
                    //console.log(response.data);
                    this.props.history.push('login');
                } else {
                    this.setState({
                        status: 'Not working.'
                    })
                }
            })
            .catch((error) => {
                console.error('Error: ', error);
            });
    };


    render() {
        return (
            <div className="form-page">
                <div className="info">
                    <h1>Skapa ett konto</h1>
                    <p>Som registrerad kan du ladda upp egna redovsiningstexter.</p>
                </div>
                <form onSubmit={this.handleSubmit}>
                    <label>Email:<br />
                    <input
                        type="email"
                        name="email"
                        required
                        placeholder="email@gmail.com"
                        onChange={this.changeHandler}
                        />
                    </label><br />
                    <label>Password:<br />
                    <input
                        type="password"
                        name="password"
                        required
                        placeholder="password"
                        onChange={this.changeHandler}
                        />
                    </label><br />
                    <button>Registrera</button>
                </form>
            </div>
        )
    }
};
