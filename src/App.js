import './App.css';
import React from 'react';

function App() {
  return (
    <React.Fragment>
    <video playsInline autoPlay muted loop id="backgroundVideo">
      <source src="video.mp4" type="video/mp4"/>
    </video>
    <div className="App">
      <div className="App-header">
        <div style={{paddingBottom: 15}}>STEMS</div>
        <div className="App-stem"><a target="_blank" rel="noopener noreferrer" href="https://drive.google.com/drive/folders/1FkXXhQQuVsGbH1TYptD_OhWt79dwQqq7?usp=sharing">1. Помним, любим, скорость</a></div>
        <div className="App-stem"><a target="_blank" rel="noopener noreferrer" href="https://drive.google.com/drive/folders/1glJO4TTGtz6xfO4hlxHcixHGm1f-hlCk?usp=sharing">2. Флирт</a></div>
        <div className="App-stem"><a target="_blank" rel="noopener noreferrer" href="https://drive.google.com/drive/folders/1cCvEtaaqRQ8ixrh_7GRD2YkmwJExOnuc?usp=sharing">3. Змеи</a></div>
        <div className="App-stem"><a target="_blank" rel="noopener noreferrer" href="https://drive.google.com/drive/folders/19hGma5KSyK4cJN1rdTH6KCdjduuebi-v?usp=sharing">4. Глаза</a></div>
        <div className="App-stem"><a target="_blank" rel="noopener noreferrer" href="https://drive.google.com/drive/folders/1ckPS2mzAwTHe6prv9tFDRifadiLqajg4?usp=sharing">5. Прелесть 10000</a></div>
        <div className="App-stem"><a target="_blank" rel="noopener noreferrer" href="https://drive.google.com/drive/folders/11lJSmOtzwaurgdPtWjkwdC2FfuBHAusE?usp=sharing">6. Лиловый Дьявол</a></div>
        <div className="App-links">
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
