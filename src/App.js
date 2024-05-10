import React, { useEffect, useState } from 'react';
import './App.css';
import loadingGif from './images/ui/loading.gif';
import platform from './images/assets/platform.jpg';
import sprite from './images/assets/sprite.png';
import gate from './images/assets/gate.png';

function App() {
  const [animate, setAnimate] = useState(false);
  const [spritePositionX, setSpritePositionX] = useState(50);
  const [mirror, setMirror] = useState(false);
  const [pageNumber, setPageNumber] = useState(1);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimate(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleKeyDown = (event) => {
      switch (event.key) {
        case 'ArrowRight':
          setSpritePositionX(prev => Math.min(100, prev + 3));
          setMirror(false);
          break;
        case 'ArrowLeft':
          setSpritePositionX(prev => Math.max(0, prev - 3));
          setMirror(true);
          break;
        default:
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);
  console.log(pageNumber);
  console.log(spritePositionX);
  
  useEffect(() => {
    const handleKeyDown = (event) => {
      if ((event.key === 'Enter' || event.key === ' ') && spritePositionX > 90) {
        setPageNumber(pageNumber + 1);
        setSpritePositionX(10);
      }
      if ((event.key === 'Enter' || event.key === ' ') && spritePositionX < 10) {
        if(pageNumber>1){
          setPageNumber(pageNumber - 1);
          setSpritePositionX(90);
        }
      }
    };
  
    window.addEventListener('keydown', handleKeyDown);
  
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [spritePositionX, pageNumber]);

  return (
    <div className="custom-background">
      <div className={`welcomeScreen ${animate ? 'animateUp' : ''}`}>
        <h1 className="welcomeText">Welcome to my portfolio game</h1>
        <img src={loadingGif} alt="Loading" className="loadingBar" />
      </div>
      {pageNumber === 1 && (
      <div className={`mainMenu ${animate ? 'animateBottom' : ''} ${pageNumber === 2 ? 'slideLeft' : ''}`}>
        <div className='myInformationScreen'>
            <h1 className="myName">My name is Hasib Ar Rafiul Fahim</h1>
            <h3 className="myTitle">I am a Software Engineer and Game Programmer</h3>
            <p className="myDescription">I am passionate about software engineering and game programming. I love creating games and solving problems.</p>
            <p className="myDescription">I currently live in Tokyo, Japan.</p>
        </div>
        <div className="platformContainer">
          <img src={platform} alt="Platform" className="platform" />
          <img src={gate} alt="Gate" className="gate" />
          <img src={sprite} alt="Sprite" className="sprite" style={{
            left: `${spritePositionX}%`,
            transform: `translateX(-50%) scaleX(${mirror ? '-1' : '1'})`
          }} />
        </div>
      </div>
      )}
      {pageNumber === 2 && (
          <div className={`careerDiv ${pageNumber === 2 ? 'slideRight' : ''}`}>
          <div className="platformContainer">
          <img src={platform} alt="Platform" className="platform" />
          <img src={gate} alt="Gate" className="gate" />
          <img src={gate} alt="Gate2" className="gate2" />
          <img src={sprite} alt="Sprite" className="sprite" style={{
            left: `${spritePositionX}%`,
            transform: `translateX(-50%) scaleX(${mirror ? '-1' : '1'})`
          }} />
        </div>
      </div>
      )}
    </div>
  );
}

export default App;
