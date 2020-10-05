import React, { Component } from 'react';
import ReactMarkdown from 'react-markdown';

class Me extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: null
        };
    }

    componentDidMount() {
        fetch('https://jsramverk-react-backend.sofiaravelin.ninja/')
        .then(response => response.json())
        .then(data => {
            this.setState({ data })
            console.log(this.state.data);
        })
    }

    //componentDidMount() {
    ////        .then(res => res.json())
    //        .then(res => this.setState({ content: res.data.content }));
    //}

    render() {
        return (
            <div>
                <h1>Välkommen</h1>
                <article className="article-standard"
                dangerouslySetInnerHTML={{__html: this.state.data}} >
                </article>
            </div>
        );
    }
}

export default Me;
