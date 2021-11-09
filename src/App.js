import logo from './logo.svg';
import './App.css';
import React from 'react';

function App() {
  return (
    <React.Fragment>
    <video autoPlay muted loop id="backgroundVideo">
      <source src="video.mp4" type="video/mp4"/>
    </video>
    <div className="App">
      <div className="App-header">
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
      </div>
    </div>
    </React.Fragment>
  );
}

export default App;
