import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import {Content, Header} from './components';


class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {

        return (
            <Router>
                <div>
                    <Header />
                    <Content />
                </div>
            </Router>
        );
    }
}

export default App;
