import React, { Component } from 'react';
import { Redirect } from "react-router-dom";
import { token } from "./Token.js";


export default class Login extends Component {
    constructor () {
        super();
        this.state = {
            email: "",
            password: "",
        };
    }

    handleSubmit = e => {
        e.preventDefault();

        const userObject = {
            email: this.state.email,
            password: this.state.password
        };

        console.log(userObject);

        fetch('https://jsramverk-react-backend.sofiaravelin.ninja/login/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email: this.state.email,
                password: this.state.password
            })
        })
        .then(response => response.json())
        .then(result => {
            token.token = result.data.token;
            this.props.history.push('reports');
            //auth.token == data.data.token;
            console.log(result);
            console.log('sucess');
        })
        .catch((error) => {
            console.log('Error', error);
        });
    };

    changeHandler = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        this.setState({[name]: value})
    };


    render() {
        if (this.state.redirect) {
            return <Redirect to={this.state.redirect} />
        }
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <h1>Logga in</h1>
                    <div className='form-group'>
                        <label>E-mail:</label>
                            <input type="email" name="email" required placeholder="email@gmail.com"
                            onChange={this.changeHandler}/>
                    </div>
                    <div className='form-group'>
                        <label>Lösenord:</label>
                            <input type="password" name="password" placeholder="Password" required
                            onChange={this.changeHandler}/>
                    </div>
                    <button>Logga in</button>
                </form>
            </div>
        )
    };
}
