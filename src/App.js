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

  return (
    <div className="custom-background">
      <div className={`welcomeScreen ${animate ? 'animateUp' : ''}`}>
        <h1 className="welcomeText">Welcome to my portfolio game</h1>
        <img src={loadingGif} alt="Loading" className="loadingBar" />
      </div>

      <div className={`mainMenu ${animate ? 'animateBottom' : ''}`}>
        <div className="platformContainer">
          <img src={platform} alt="Platform" className="platform" />
          <img src={gate} alt="Gate" className="gate" />
          <img src={sprite} alt="Sprite" className="sprite" style={{
            left: `${spritePositionX}%`,
            transform: `translateX(-50%) scaleX(${mirror ? '-1' : '1'})`
          }} />
        </div>
      </div>
    </div>
  );
}

export default App;
