import React, { useEffect, useState } from 'react';
import './App.css';
import loadingGif from './images/ui/loading.gif';
import platform from './images/assets/platform.jpg';
import sprite from './images/assets/sprite.png';
import gate from './images/assets/gate.png';
import studyImage from './images/info/study.png';
import dhrubokImage from './images/info/dhrubok.png';
import tosFastImage from './images/info/tosfast.png';
import techrz from './images/info/techrz.png';
import sysystem from './images/info/sysystem.png';
import seeMyCareer from './images/ui/seeMyCareer.png';
import backToMainScreen from './images/ui/backToMainScreen.png';
import goToSkillPage from './images/ui/goToSkillPage.png';
import goBackToCareer from './images/ui/goBackToCareer.png';

import ProgressBar from "@ramonak/react-progress-bar";


function App() {
  const [animate, setAnimate] = useState(false);
  const [spritePositionX, setSpritePositionX] = useState(50);
  const [mirror, setMirror] = useState(false);
  const [pageNumber, setPageNumber] = useState(1);
  const [prevPage, setPrevPage] = useState(0);

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
  
  useEffect(() => {
    if (spritePositionX > 90) {
        setPrevPage(pageNumber);
        setPageNumber(pageNumber + 1);
        setSpritePositionX(10);
      }
      if (spritePositionX < 10) {
        if(pageNumber>1){
          setPrevPage(pageNumber);
          setPageNumber(pageNumber - 1);
          setSpritePositionX(90);
        }
    };
  }, [spritePositionX, pageNumber]);

  return (
    <div className="custom-background">
      <div className={`welcomeScreen ${animate ? 'animateUp' : ''}`}>
        <h1 className="welcomeText">Welcome to my portfolio game</h1>
        <img src={loadingGif} alt="Loading" className="loadingBar" />
      </div>
      {pageNumber === 1 && (
      <div className={`mainMenu ${animate ? 'animateBottom' :''}`}>
        <div className='myInformationScreen'>
            <h1 className="myName">My name is Hasib Ar Rafiul Fahim</h1>
            <h3 className="myTitle">I am a Software Engineer and Game Programmer</h3>
            <p className="myDescription">I am passionate about software engineering and game programming. I love creating games and solving problems.</p>
            <p className="myDescription">I currently live in Tokyo, Japan.</p>
        </div>
        <div className="platformContainer">
          <img src={platform} alt="Platform" className="platform" />
          <img src={gate} alt="Gate" className="gate" />
            <img src={seeMyCareer} alt="seeMyCareer" className="forwardSign" />
          <img src={sprite} alt="Sprite" className="sprite" style={{
            left: `${spritePositionX}%`,
            transform: `translateX(-50%) scaleX(${mirror ? '-1' : '1'})`
          }} />
        </div>
      </div>
      )}
      {pageNumber === 2 && (
          <div className={`careerDiv ${prevPage > pageNumber ? 'slideLeft' : 'slideRight'} custom-background2`}>
          <div className="platformContainer">
          <img src={platform} alt="Platform" className="platform" />
          <img src={studyImage} alt="study" className="study" />
          <img src={dhrubokImage} alt="dhrubok" className="dhrubok" />
          <img src={tosFastImage} alt="tosFast" className="tosFast" />
          <img src={techrz} alt="techrz" className="techrz" />
          <img src={sysystem} alt="sysystem" className="sysystem" />
          
          <img src={backToMainScreen} alt="backToMainScreen" className="backWordSign" />
          <img src={goToSkillPage} alt="goToSkillPage" className="forwardSign" />
          <img src={gate} alt="Gate" className="gate" />
          <img src={gate} alt="Gate2" className="gate2" />
          <img src={sprite} alt="Sprite" className="sprite" style={{
            left: `${spritePositionX}%`,
            transform: `translateX(-50%) scaleX(${mirror ? '-1' : '1'})`
          }} />
        </div>
      </div>
      )}

        {pageNumber === 3 && (
          <div className={`skillsbar ${prevPage > pageNumber ? 'slideLeft' : 'slideRight'} custom-background2`}>
          <div className="platformContainer">
          <img src={platform} alt="Platform" className="platform" />
          <h1 className="skillsTitle">Skills</h1>
          <ProgressBar className="java" completed={80} customLabel="Java" />
          <ProgressBar className="cSharp" completed={60} customLabel="C#" />
          <ProgressBar className="python" completed={70} customLabel="Python" />
          <ProgressBar className="javaScript" completed={80} customLabel="JavaScript" />

          <ProgressBar className="unity" completed={80} customLabel="Unity" />
          <ProgressBar className="unreal" completed={60} customLabel="Unreal Engine" />
          <ProgressBar className="django" completed={80} customLabel="Django" />
          <ProgressBar className="react" completed={80} customLabel="React" />
          
          <img src={goBackToCareer} alt="goBackToCareer" className="backWordSign" />
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
