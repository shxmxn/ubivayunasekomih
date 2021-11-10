import './App.css';
import React from 'react';
import Countdown from 'react-countdown';

const Completionist = () => <span>НА ВСЕХ ПЛОЩАДКАХ</span>;

function App() {
  return (
    <React.Fragment>
    <video playsInline autoPlay muted loop id="backgroundVideo">
      <source src="video.mp4" type="video/mp4"/>
    </video>
    <div className="App">
      <div className="App-header">
        <Countdown className="App-countdown" date={Date.parse("November 25, 2021")}>
          <Completionist />
        </Countdown>
        <div className="App-links">
          {/* <a
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
            className="App-link" 
          >
            <img src="soundcloud.png" alt="soundcloud"/>
          </a> */}
          <a
            href="https://vk.com/ubivayunasekomih"
            target="_blank"
            rel="noopener noreferrer"
            className="App-link" 
          >
            <img src="vk.png" alt="vk"/>
          </a>
          <a
            href="https://open.spotify.com/artist/5LgnxGyp7XFimXuoZuG9zd"
            target="_blank"
            rel="noopener noreferrer"
            className="App-link" 
          >
            <img src="spotify.png" alt="spotify"/>
          </a>
          <a
            href="https://www.instagram.com/ubivayunasekomih/"
            target="_blank"
            rel="noopener noreferrer"
            className="App-link" 
          >
            <img src="instagram.png" alt="instagram"/>
          </a>
        </div>
      </div>
    </div>
    </React.Fragment>
  );
}

export default App;
