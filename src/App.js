import React, { Component } from 'react';
import Amplify from 'aws-amplify';
import { withAuthenticator } from 'aws-amplify-react';
import logo from './logo.svg';
import './App.css';

import aws_exports from './aws-exports';

Amplify.configure(aws_exports);

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

// wrap protected page around using HoC
export default withAuthenticator(App, {includeGreetings: true});
