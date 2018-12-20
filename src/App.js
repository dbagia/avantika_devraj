import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './App.css';

class App extends Component {
  render() {
    const hrClasses = ['star-light', 'App-absolute-center'].join(' ')
    const starIconClasses = ['fa-layers', 'fa-fw', 'App-absolute-center'].join(' ')
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
            <div style={{position:"relative", marginTop:"2rem", marginBottom:"3.5rem"}}>
              <hr className={hrClasses} />
              <span className={starIconClasses} style={{right: "2rem"}}>
                <FontAwesomeIcon icon={"square"} color="#18BC9B" size={"4x"}/>
                <FontAwesomeIcon icon={"star"} pull={"center"} size={"2x"} transform={"right-5 shrink-2"}/>
              </span>
            </div>
            <h2 className="mb-0">User Experience Designer - Interaction Designer</h2>
          </div>
        </header>
      </div>
    );
  }
}

export default App;
