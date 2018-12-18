import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        {/*<header className="App-header">
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
        </header>*/}
        <header className="masthead bg-primary text-white text-center">
          <div className="container">
            <img className="img-fluid mb-5 d-block mx-auto" width="256px" height="256px"
                 src="img/myAvatar.png" alt=""/>
              <h1 className="text-uppercase mb-0">Avantika Devraj</h1>
              <hr className="star-light"/>
                <h2 className="font-weight-light mb-0">User Experience Designer - Interaction Designer</h2>
          </div>
        </header>
      </div>
    );
  }
}

export default App;
