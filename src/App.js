import React, { useEffect, useState } from 'react';
import './App.css';
import ProgressBar from "@ramonak/react-progress-bar";
import Fab from '@mui/material/Fab';
import Email from '@mui/icons-material/Email';
import GitHub from '@mui/icons-material/GitHub';
import LinkedIn from '@mui/icons-material/LinkedIn';
import SvgIcon from '@mui/material/SvgIcon';
import Dialog from '@mui/material/Dialog';
import Slide from '@mui/material/Slide';

import loadingGif from './images/assets/loading.gif';
import SwipeLeft  from './images/assets/swipeLeft.gif';
import SwipeRight  from './images/assets/swipeRight.gif';
import platform from './images/assets/platform.jpg';
import sprite from './images/assets/sprite.png';
import spriteRun from './images/assets/spriteRun.png';
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
import goToProjects from './images/ui/gotoProjects.png';
import goBackToSkills from './images/ui/goBackToSkills.png';
import goToLicenceAndCertifications from './images/ui/goToLicenceAndCertifications.png';
import goBackToProjects from './images/ui/goBackToProjects.png';
import goToContactAndLinks from './images/ui/goToContactAndLinks.png';
import goBackToLicenceAndCertifications from './images/ui/goBackToLicenseAndCertifications.png';
import rotateNotice from './images/assets/rotateNotice.gif';

import billboard13 from './images/ui/board13.png';
import billboard12 from './images/ui/board12.png';
import billboard11 from './images/ui/board11.png';
import billboard10 from './images/ui/board10.png';
import billboard9 from './images/ui/board9.png';
import billboard8 from './images/ui/board8.png';
import billboard7 from './images/ui/board7.png';
import billboard6 from './images/ui/board6.png';
import billboard5 from './images/ui/board5.png';
import billboard4 from './images/ui/board4.png';
import billboard3 from './images/ui/board3.png';
import billboard2 from './images/ui/board2.png';
import billboard1 from './images/ui/board1.png';

import certificate1 from './images/ui/certificate1.png';
import certificate2 from './images/ui/certificate2.png';
import certificate3 from './images/ui/certificate3.png';
import certificate4 from './images/ui/certificate4.png';
import certificate5 from './images/ui/certificate5.png';
import certificate6 from './images/ui/certificate6.png';


function StackOverflowIcon(props) {
  return (
    <SvgIcon {...props} viewBox="0 0 24 24">
      <path d="M15 21h-10v-2h10v2zm6-11.665l-1.621-9.335-1.993.346 1.62 9.335 1.994-.346zm-5.964 6.937l-9.746-.975-.186 2.016 9.755.879.177-1.92zm.538-2.587l-9.276-2.608-.526 1.954 9.306 2.5.496-1.846zm1.204-2.413l-8.297-4.864-1.029 1.743 8.298 4.865 1.028-1.744zm1.866-1.467l-5.339-7.829-1.672 1.14 5.339 7.829 1.672-1.14zm-2.644 4.195v8h-12v-8h-2v10h16v-10h-2z"/>
    </SvgIcon>
  );
}

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const FullScreenDialog = ({ open, handleClose }) => (
  <React.Fragment>
    <Dialog
      fullScreen
      open={open}
      onClose={handleClose}
      TransitionComponent={Transition}
    >
      <div className="rotateNotice">
        <img src={rotateNotice} alt="Rotate your device" />
      </div>
    </Dialog>
  </React.Fragment>
);

function App() {
  const [animate, setAnimate] = useState(false);
  const [spritePositionX, setSpritePositionX] = useState(50);
  const [mirror, setMirror] = useState(false);
  const [spriteImage, setSpriteImage] = useState(sprite);
  const [pageNumber, setPageNumber] = useState(1);
  const [prevPage, setPrevPage] = useState(0);
  const [isPortrait, setIsPortrait] = useState(window.innerHeight > window.innerWidth);
  const [isGamePaused, setIsGamePaused] = useState(false);
  const [dialogOpen, setDialogOpen] = useState(false);

  const [billboard13position, setBillboard13position] = useState(40);
  const [billboard12position, setBillboard12position] = useState(80);
  const [billboard11position, setBillboard11position] = useState(120);
  const [billboard10position, setBillboard10position] = useState(160);
  const [billboard9position, setBillboard9position] = useState(200);
  const [billboard8position, setBillboard8position] = useState(240);
  const [billboard7position, setBillboard7position] = useState(280);
  const [billboard6position, setBillboard6position] = useState(320);
  const [billboard5position, setBillboard5position] = useState(360);
  const [billboard4position, setBillboard4position] = useState(400);
  const [billboard3position, setBillboard3position] = useState(440);
  const [billboard2position, setBillboard2position] = useState(480);
  const [billboard1position, setBillboard1position] = useState(520);

  const [certificate6position, setCertificate6position] = useState(40);
  const [certificate5position, setCertificate5position] = useState(80);
  const [certificate4position, setCertificate4position] = useState(120);
  const [certificate3position, setCertificate3position] = useState(160);
  const [certificate2position, setCertificate2position] = useState(200);
  const [certificate1position, setCertificate1position] = useState(240);

  useEffect(() => {
    const handleOrientationChange = () => {
      const portrait = window.innerHeight > window.innerWidth;
      setIsPortrait(portrait);
      setIsGamePaused(portrait);
      if (portrait) {
        setDialogOpen(true);
      } else {
        setDialogOpen(false);
      }
    };

    window.addEventListener("resize", handleOrientationChange);
    return () => window.removeEventListener("resize", handleOrientationChange);
  }, []);

  const handleDialogClose = () => {
    setDialogOpen(false);
  };
  

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimate(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setSpriteImage(sprite);
    }, 1000);

    return () => clearTimeout(timer);
  }, [spriteImage]);


  useEffect(() => {
    if (spritePositionX > 90) {
      if(pageNumber<6){
        setPrevPage(pageNumber);
        setPageNumber(pageNumber + 1);
        setSpritePositionX(10);
      }
    }
      if (spritePositionX < 10) {
        if(pageNumber>1){
          setPrevPage(pageNumber);
          setPageNumber(pageNumber - 1);
          setSpritePositionX(90);
        }
    };
  }, [spritePositionX, pageNumber]);

  useEffect(() => {
    const handleKeyDown = (event) => {
      setSpriteImage(spriteRun);
      switch (event.key) {
        case 'ArrowRight':
          if(pageNumber === 4 && !isGamePaused){
            setBillboard13position(billboard13position - 3);
            setBillboard12position(billboard12position - 3);
            setBillboard11position(billboard11position - 3);
            setBillboard10position(billboard10position - 3);
            setBillboard9position(billboard9position - 3);
            setBillboard8position(billboard8position - 3);
            setBillboard7position(billboard7position - 3);
            setBillboard6position(billboard6position - 3);
            setBillboard5position(billboard5position - 3);
            setBillboard4position(billboard4position - 3);
            setBillboard3position(billboard3position - 3);
            setBillboard2position(billboard2position - 3);
            setBillboard1position(billboard1position - 3);
            setSpritePositionX(prev => Math.min(100, prev + 0.45));
          } else if(pageNumber === 5 && !isGamePaused){
            setCertificate6position(certificate6position - 3);
            setCertificate5position(certificate5position - 3);
            setCertificate4position(certificate4position - 3);
            setCertificate3position(certificate3position - 3);
            setCertificate2position(certificate2position - 3);
            setCertificate1position(certificate1position - 3);
            setSpritePositionX(prev => Math.min(100, prev + 1));
          }
          else{
            if(!isGamePaused){
            setSpritePositionX(prev => Math.min(100, prev + 3));
            }
          }
          setMirror(false);
          break;
        case 'ArrowLeft':
          if(pageNumber === 4 && !isGamePaused){
            setBillboard13position(billboard13position + 3);
            setBillboard12position(billboard12position + 3);
            setBillboard11position(billboard11position + 3);
            setBillboard10position(billboard10position + 3);
            setBillboard9position(billboard9position + 3);
            setBillboard8position(billboard8position + 3);
            setBillboard7position(billboard7position + 3);
            setBillboard6position(billboard6position + 3);
            setBillboard5position(billboard5position + 3);
            setBillboard4position(billboard4position + 3);
            setBillboard3position(billboard3position + 3);
            setBillboard2position(billboard2position + 3);
            setBillboard1position(billboard1position + 3);
            setSpritePositionX(prev => Math.max(0, prev - 0.45));
          } else if(pageNumber === 5 && !isGamePaused){
            setCertificate6position(certificate6position + 3);
            setCertificate5position(certificate5position + 3);
            setCertificate4position(certificate4position + 3);
            setCertificate3position(certificate3position + 3);
            setCertificate2position(certificate2position + 3);
            setCertificate1position(certificate1position + 3);
            setSpritePositionX(prev => Math.max(0, prev - 1));
          }
          else {
            if(!isGamePaused){
            setSpritePositionX(prev => Math.max(0, prev - 3));
            }
          }
          setMirror(true);
          break;
        default:
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [pageNumber, billboard1position, billboard13position,spritePositionX, certificate1position, certificate6position, isGamePaused]);

  useEffect(() => {
    const handleWheel = (event) => {
      setSpriteImage(spriteRun);
        if(event.deltaY > 0){
          if(pageNumber === 4 && !isGamePaused){
            setBillboard13position(billboard13position - 3);
            setBillboard12position(billboard12position - 3);
            setBillboard11position(billboard11position - 3);
            setBillboard10position(billboard10position - 3);
            setBillboard9position(billboard9position - 3);
            setBillboard8position(billboard8position - 3);
            setBillboard7position(billboard7position - 3);
            setBillboard6position(billboard6position - 3);
            setBillboard5position(billboard5position - 3);
            setBillboard4position(billboard4position - 3);
            setBillboard3position(billboard3position - 3);
            setBillboard2position(billboard2position - 3);
            setBillboard1position(billboard1position - 3);
            setSpritePositionX(prev => Math.min(100, prev + 0.45));
          } else if(pageNumber === 5 && !isGamePaused){
            setCertificate6position(certificate6position - 3);
            setCertificate5position(certificate5position - 3);
            setCertificate4position(certificate4position - 3);
            setCertificate3position(certificate3position - 3);
            setCertificate2position(certificate2position - 3);
            setCertificate1position(certificate1position - 3);
            setSpritePositionX(prev => Math.min(100, prev + 1));
          }
          else{
            if(!isGamePaused){
            setSpritePositionX(prev => Math.min(100, prev + 3));
            }
          }
          setMirror(false);
        }
          
        if(event.deltaY < 0){
          if(pageNumber === 4 && !isGamePaused){
            setBillboard13position(billboard13position + 3);
            setBillboard12position(billboard12position + 3);
            setBillboard11position(billboard11position + 3);
            setBillboard10position(billboard10position + 3);
            setBillboard9position(billboard9position + 3);
            setBillboard8position(billboard8position + 3);
            setBillboard7position(billboard7position + 3);
            setBillboard6position(billboard6position + 3);
            setBillboard5position(billboard5position + 3);
            setBillboard4position(billboard4position + 3);
            setBillboard3position(billboard3position + 3);
            setBillboard2position(billboard2position + 3);
            setBillboard1position(billboard1position + 3);
            setSpritePositionX(prev => Math.max(0, prev - 0.45));
          } else if(pageNumber === 5 && !isGamePaused){
            setCertificate6position(certificate6position + 3);
            setCertificate5position(certificate5position + 3);
            setCertificate4position(certificate4position + 3);
            setCertificate3position(certificate3position + 3);
            setCertificate2position(certificate2position + 3);
            setCertificate1position(certificate1position + 3);
            setSpritePositionX(prev => Math.max(0, prev - 1));
          }
          else {
            if(!isGamePaused){
            setSpritePositionX(prev => Math.max(0, prev - 3));
            }
          }
          setMirror(true);
        }
    };

    window.addEventListener('wheel', handleWheel);
    return () => window.removeEventListener('wheel', handleWheel);
  }, [pageNumber, billboard1position, billboard13position,spritePositionX, certificate1position, certificate6position, isGamePaused]);

  useEffect(() => {
    let startX = null;
    const handleTouchStart = (event) => {
      startX = event.touches[0].clientX;
    };

    const handleTouchEnd = (event) => {
      const endX = event.changedTouches[0].clientX;
      const deltaX = startX - endX;
  
      if (Math.abs(deltaX) < 30) {
        return;
      }
  
      if (deltaX < 0) {
        setSpriteImage(spriteRun);
        if(pageNumber === 4 && !isGamePaused){
          setBillboard13position(billboard13position - 30);
          setBillboard12position(billboard12position - 30);
          setBillboard11position(billboard11position - 30);
          setBillboard10position(billboard10position - 30);
          setBillboard9position(billboard9position - 30);
          setBillboard8position(billboard8position - 30);
          setBillboard7position(billboard7position - 30);
          setBillboard6position(billboard6position - 30);
          setBillboard5position(billboard5position - 30);
          setBillboard4position(billboard4position - 30);
          setBillboard3position(billboard3position - 30);
          setBillboard2position(billboard2position - 30);
          setBillboard1position(billboard1position - 30);
          setSpritePositionX(prev => Math.min(100, prev + 4.5));
        } else if(pageNumber === 5 && !isGamePaused){
          setCertificate6position(certificate6position - 30);
          setCertificate5position(certificate5position - 30);
          setCertificate4position(certificate4position - 30);
          setCertificate3position(certificate3position - 30);
          setCertificate2position(certificate2position - 30);
          setCertificate1position(certificate1position - 30);
          setSpritePositionX(prev => Math.min(100, prev + 10));
        }
        else{
          if(!isGamePaused){
          setSpritePositionX(prev => Math.min(100, prev + 30));
          }
        }
        setMirror(false);
      } else {
        setSpriteImage(spriteRun);
        if(pageNumber === 4 && !isGamePaused){
          setBillboard13position(billboard13position + 30);
          setBillboard12position(billboard12position + 30);
          setBillboard11position(billboard11position + 30);
          setBillboard10position(billboard10position + 30);
          setBillboard9position(billboard9position + 30);
          setBillboard8position(billboard8position + 30);
          setBillboard7position(billboard7position + 30);
          setBillboard6position(billboard6position + 30);
          setBillboard5position(billboard5position + 30);
          setBillboard4position(billboard4position + 30);
          setBillboard3position(billboard3position + 30);
          setBillboard2position(billboard2position + 30);
          setBillboard1position(billboard1position + 30);
          setSpritePositionX(prev => Math.max(0, prev - 4.5));
        } else if(pageNumber === 5 && !isGamePaused){
          setCertificate6position(certificate6position + 30);
          setCertificate5position(certificate5position + 30);
          setCertificate4position(certificate4position + 30);
          setCertificate3position(certificate3position + 30);
          setCertificate2position(certificate2position + 30);
          setCertificate1position(certificate1position + 30);
          setSpritePositionX(prev => Math.max(0, prev - 10));
        }
        else {
          if(!isGamePaused){
          setSpritePositionX(prev => Math.max(0, prev - 30));
          }
        }
        setMirror(true);
      }
    };

    window.addEventListener('touchstart', handleTouchStart);
    window.addEventListener('touchend', handleTouchEnd);
    return () => {
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchend', handleTouchEnd);
    };
  }, [pageNumber, billboard1position, billboard13position,spritePositionX, certificate1position, certificate6position, isGamePaused]);
  

  return (
    <div className="custom-background">
      <div>
      {isPortrait && (
          <FullScreenDialog open={setDialogOpen} handleClose={handleDialogClose} />
      )}
    </div>
      <div className={`welcomeScreen ${animate ? 'animateUp' : ''}`}>
        <h1 className="welcomeText">Welcome to my portfolio</h1>
        <img src={loadingGif} alt="Loading" className="loadingBar" />
      </div>
      {pageNumber === 1 && (
      <div className={`mainMenu ${animate ? 'animateBottom' :''}`}>
        <div>
      {isPortrait && (
        <FullScreenDialog open={setDialogOpen} handleClose={handleDialogClose} />
      )}
    </div>
        <div className='myInformationScreen'>
            <h1 className="myName">My name is Hasib Ar Rafiul Fahim</h1>
            <h3 className="myTitle">I am a Software Engineer and Game Programmer</h3>
            <p className="myDescription">I am passionate about software engineering and game programming. I love creating games and solving problems.</p>
            <p className="myDescription">I currently live in Tokyo, Japan.</p>
        </div>
        <div className="platformContainer">
          <img src={platform} alt="Platform" className="platform" />
          <img src={gate} alt="Gate" className="gate" />
          <img src={SwipeRight} alt="SwipeRight" className="gate" />
          <img src={seeMyCareer} alt="seeMyCareer" className="forwardSign" />
          <img src={spriteImage} alt="Sprite" className="sprite" style={{
            left: `${spritePositionX}%`,
            transform: `translateX(-50%) scaleX(${mirror ? '-1' : '1'})`
          }} />
        </div>
      </div>
      )}
      {pageNumber === 2 && (
          <div className={`careerDiv ${prevPage > pageNumber ? 'slideLeft' : 'slideRight'} custom-background2`}>
            <div>
            {isPortrait && (
            <FullScreenDialog open={setDialogOpen} handleClose={handleDialogClose} />
            )}
            </div>
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
          <img src={SwipeRight} alt="SwipeRight" className="gate" />
          <img src={gate} alt="Gate2" className="gate2" />
          <img src={SwipeLeft} alt="SwipeLeft" className="gate2" />
          <img src={spriteImage} alt="Sprite" className="sprite" style={{
            left: `${spritePositionX}%`,
            transform: `translateX(-50%) scaleX(${mirror ? '-1' : '1'})`
          }} />
        </div>
      </div>
      )}

        {pageNumber === 3 && (
          <div className={`skillsbar ${prevPage > pageNumber ? 'slideLeft' : 'slideRight'} custom-background2`}>
            <div>
            {isPortrait && (
            <FullScreenDialog open={setDialogOpen} handleClose={handleDialogClose} />
            )}
            </div>
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
          <img src={goToProjects} alt="goToProjects" className="forwardSign" />
          <img src={gate} alt="Gate" className="gate" />
          <img src={SwipeRight} alt="SwipeRight" className="gate" />
          <img src={gate} alt="Gate2" className="gate2" />
          <img src={SwipeLeft} alt="SwipeLeft" className="gate2" />
          <img src={spriteImage} alt="Sprite" className="sprite" style={{
            left: `${spritePositionX}%`,
            transform: `translateX(-50%) scaleX(${mirror ? '-1' : '1'})`
          }} />
        </div>
      </div>
      )}

        {pageNumber === 4 && (
          <div className={`gameProjects ${prevPage > pageNumber ? 'slideLeft' : 'slideRight'} custom-background2`}>
            <div>
            {isPortrait && (
            <FullScreenDialog open={setDialogOpen} handleClose={handleDialogClose} />
            )}
            </div>
          <div className="platformContainer">
          <img src={platform} alt="Platform" className="platform" />
          <img src={goBackToSkills} alt="goBackToSkills" className="backWordSign" />
          <img src={goToLicenceAndCertifications} alt="goToLicenceAndCertifications" className="forwardSign" />

          <div className="billboard" style={{
              left: `${billboard13position}%`,
              transform: `translateX(-50%)`
          }}>
            <img src={billboard13} alt="billboard" style={{ width: '100%', height: 'auto' }} />
            <a href="https://play.google.com/store/apps/details?id=com.techrz.skyrush" 
              target="_blank" 
              rel="noopener noreferrer"
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '45%',
                cursor: 'pointer',
                zIndex: 10
              }}>
            </a>
          </div>

          <div className="billboard" style={{
              left: `${billboard12position}%`,
              transform: `translateX(-50%)`
          }}>
            <img src={billboard12} alt="billboard" style={{ width: '100%', height: 'auto' }} />
            <a href="https://github.com/hasibarrafiul/Tanks-Game-Unity" 
              target="_blank" 
              rel="noopener noreferrer"
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '45%',
                cursor: 'pointer',
                zIndex: 10
              }}>
            </a>
          </div>

          <div className="billboard" style={{
              left: `${billboard11position}%`,
              transform: `translateX(-50%)`
          }}>
            <img src={billboard11} alt="billboard" style={{ width: '100%', height: 'auto' }} />
            <a href="https://github.com/hasibarrafiul/FPS-Shooter-Using-Unreal-Engine-4" 
              target="_blank" 
              rel="noopener noreferrer"
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '45%',
                cursor: 'pointer',
                zIndex: 10
              }}>
            </a>
          </div>

          <div className="billboard" style={{
              left: `${billboard10position}%`,
              transform: `translateX(-50%)`
          }}>
            <img src={billboard10} alt="billboard" style={{ width: '100%', height: 'auto' }} />
            <a href="https://github.com/hasibarrafiul/Puzzle-Game-in-UnrealEngine" 
              target="_blank" 
              rel="noopener noreferrer"
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '45%',
                cursor: 'pointer',
                zIndex: 10
              }}>
            </a>
          </div>

          <div className="billboard" style={{
              left: `${billboard9position}%`,
              transform: `translateX(-50%)`
          }}>
            <img src={billboard9} alt="billboard" style={{ width: '100%', height: 'auto' }} />
            <a href="https://github.com/hasibarrafiul/Rolling-unreal-engine" 
              target="_blank" 
              rel="noopener noreferrer"
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '45%',
                cursor: 'pointer',
                zIndex: 10
              }}>
            </a>
          </div>

          <div className="billboard" style={{
              left: `${billboard8position}%`,
              transform: `translateX(-50%)`
          }}>
            <img src={billboard8} alt="billboard" style={{ width: '100%', height: 'auto' }} />
            <a href="https://github.com/hasibarrafiul/Brick-Breaker-in-Unreal-Engine" 
              target="_blank" 
              rel="noopener noreferrer"
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '45%',
                cursor: 'pointer',
                zIndex: 10
              }}>
            </a>
          </div>

          <div className="billboard" style={{
              left: `${billboard7position}%`,
              transform: `translateX(-50%)`
          }}>
            <img src={billboard7} alt="billboard" style={{ width: '100%', height: 'auto' }} />
            <a href="https://github.com/hasibarrafiul/Planet-Environment-VR-App" 
              target="_blank" 
              rel="noopener noreferrer"
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '45%',
                cursor: 'pointer',
                zIndex: 10
              }}>
            </a>
          </div>

          <div className="billboard" style={{
              left: `${billboard6position}%`,
              transform: `translateX(-50%)`
          }}>
            <img src={billboard6} alt="billboard" style={{ width: '100%', height: 'auto' }} />
            <a href="https://github.com/hasibarrafiul/AR-Solar-System-Mobile-App" 
              target="_blank" 
              rel="noopener noreferrer"
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '45%',
                cursor: 'pointer',
                zIndex: 10
              }}>
            </a>
          </div>

          <div className="billboard" style={{
              left: `${billboard5position}%`,
              transform: `translateX(-50%)`
          }}>
            <img src={billboard5} alt="billboard" style={{ width: '100%', height: 'auto' }} />
            <a href="https://github.com/hasibarrafiul/extreme-riders-game--client" 
              target="_blank" 
              rel="noopener noreferrer"
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '45%',
                cursor: 'pointer',
                zIndex: 10
              }}>
            </a>
          </div>

          <div className="billboard" style={{
              left: `${billboard4position}%`,
              transform: `translateX(-50%)`
          }}>
            <img src={billboard4} alt="billboard" style={{ width: '100%', height: 'auto' }} />
            <a href="https://github.com/hasibarrafiul/flappybird-using-react" 
              target="_blank" 
              rel="noopener noreferrer"
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '45%',
                cursor: 'pointer',
                zIndex: 10
              }}>
            </a>
          </div>

          <div className="billboard" style={{
              left: `${billboard3position}%`,
              transform: `translateX(-50%)`
          }}>
            <img src={billboard3} alt="billboard" style={{ width: '100%', height: 'auto' }} />
            <a href="https://github.com/hasibarrafiul/Space-Adventure-Game" 
              target="_blank" 
              rel="noopener noreferrer"
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '45%',
                cursor: 'pointer',
                zIndex: 10
              }}>
            </a>
          </div>

          <div className="billboard" style={{
              left: `${billboard2position}%`,
              transform: `translateX(-50%)`
          }}>
            <img src={billboard2} alt="billboard" style={{ width: '100%', height: 'auto' }} />
            <a href="https://github.com/hasibarrafiul/Break-Breaker-Construct-3" 
              target="_blank" 
              rel="noopener noreferrer"
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '45%',
                cursor: 'pointer',
                zIndex: 10
              }}>
            </a>
          </div>

          <div className="billboard" style={{
              left: `${billboard1position}%`,
              transform: `translateX(-50%)`
          }}>
            <img src={billboard1} alt="billboard" style={{ width: '100%', height: 'auto' }} />
            <a href="https://github.com/hasibarrafiul/tictac-game-using-react" 
              target="_blank" 
              rel="noopener noreferrer"
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '45%',
                cursor: 'pointer',
                zIndex: 10
              }}>
            </a>
          </div>
          
          <img src={gate} alt="Gate" className="gate" />
          <img src={SwipeRight} alt="SwipeRight" className="gate" />
          <img src={gate} alt="Gate2" className="gate2" />
          <img src={SwipeLeft} alt="SwipeLeft" className="gate2" />
          <img src={spriteImage} alt="Sprite" className="sprite" style={{
            left: `${spritePositionX}%`,
            transform: `translateX(-50%) scaleX(${mirror ? '-1' : '1'})`
          }} />
        </div>
      </div>
      )}

        {pageNumber === 5 && (
          <div className={`certificates ${prevPage > pageNumber ? 'slideLeft' : 'slideRight'} custom-background2`}>
            <div>
            {isPortrait && (
            <FullScreenDialog open={setDialogOpen} handleClose={handleDialogClose} />
            )}
            </div>
          <div className="platformContainer">
          <img src={platform} alt="Platform" className="platform" />

          <img src={gate} alt="Gate" className="gate" />
          <img src={SwipeRight} alt="SwipeRight" className="gate" />
          <img src={gate} alt="Gate2" className="gate2" />
          <img src={SwipeLeft} alt="SwipeLeft" className="gate2" />
          <img src={goBackToProjects} alt="goBackToProjects" className="backWordSign" />
          <img src={goToContactAndLinks} alt="goToContactAndLinks" className="forwardSign" />
          
          <div className="billboard" style={{
              left: `${certificate6position}%`,
              transform: `translateX(-50%)`
          }}>
            <img src={certificate6} alt="billboard" style={{ width: '100%', height: 'auto' }} />
            <a href="https://drive.google.com/file/d/1rWJNxOrg1SJbCYPwnDOi6bCTMCOGOWfc/view" 
              target="_blank" 
              rel="noopener noreferrer"
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '45%',
                cursor: 'pointer',
                zIndex: 10
              }}>
            </a>
          </div>

          <div className="billboard" style={{
              left: `${certificate5position}%`,
              transform: `translateX(-50%)`
          }}>
            <img src={certificate5} alt="billboard" style={{ width: '100%', height: 'auto' }} />
            <a href="https://drive.google.com/file/d/1XFcDl8lqaBjdTWos87FSRggodG_q3NpC/view" 
              target="_blank" 
              rel="noopener noreferrer"
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '45%',
                cursor: 'pointer',
                zIndex: 10
              }}>
            </a>
          </div>

          <div className="billboard" style={{
              left: `${certificate4position}%`,
              transform: `translateX(-50%)`
          }}>
            <img src={certificate4} alt="billboard" style={{ width: '100%', height: 'auto' }} />
            <a href="https://drive.google.com/file/d/15ASwqhEZbMuzEloYDl7E6LdJRaZVCVSg/view" 
              target="_blank" 
              rel="noopener noreferrer"
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '45%',
                cursor: 'pointer',
                zIndex: 10
              }}>
            </a>
          </div>

          <div className="billboard" style={{
              left: `${certificate3position}%`,
              transform: `translateX(-50%)`
          }}>
            <img src={certificate3} alt="billboard" style={{ width: '100%', height: 'auto' }} />
            <a href="https://www.linkedin.com/learning/certificates/4adf7fb78d23b3361c14fb6a41b773a838e2d07fa2f51ca3c58cd126b1e0448e?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3BolQEDmGFSFGUq8cyG%2FAofw%3D%3D" 
              target="_blank" 
              rel="noopener noreferrer"
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '45%',
                cursor: 'pointer',
                zIndex: 10
              }}>
            </a>
          </div>

          <div className="billboard" style={{
              left: `${certificate2position}%`,
              transform: `translateX(-50%)`
          }}>
            <img src={certificate2} alt="billboard" style={{ width: '100%', height: 'auto' }} />
            <a href="https://www.linkedin.com/learning/certificates/b3a24e2ed0810c4434947ad22abb38e519559fed0ef1be240b6540df618252cd?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3BolQEDmGFSFGUq8cyG%2FAofw%3D%3D" 
              target="_blank" 
              rel="noopener noreferrer"
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '45%',
                cursor: 'pointer',
                zIndex: 10
              }}>
            </a>
          </div>

          <div className="billboard" style={{
              left: `${certificate1position}%`,
              transform: `translateX(-50%)`
          }}>
            <img src={certificate1} alt="billboard" style={{ width: '100%', height: 'auto' }} />
            <a href="https://www.linkedin.com/learning/certificates/15ce63d12a8fd47329581bb4988b024cfc32a234f4a036c0c254a351133ceff8?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3BolQEDmGFSFGUq8cyG%2FAofw%3D%3D" 
              target="_blank" 
              rel="noopener noreferrer"
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '45%',
                cursor: 'pointer',
                zIndex: 10
              }}>
            </a>
          </div>
          
          <img src={spriteImage} alt="Sprite" className="sprite" style={{
            left: `${spritePositionX}%`,
            transform: `translateX(-50%) scaleX(${mirror ? '-1' : '1'})`
          }} />
        </div>
      </div>
      )}

        {pageNumber === 6 && (
          <div className={`certificates ${prevPage > pageNumber ? 'slideLeft' : 'slideRight'} custom-background2`}>
            <div>
            {isPortrait && (
            <FullScreenDialog open={setDialogOpen} handleClose={handleDialogClose} />
            )}
            </div>
          <div className="platformContainer">
          <img src={platform} alt="Platform" className="platform" />
          <img src={gate} alt="Gate2" className="gate2" />
          <img src={SwipeLeft} alt="SwipeLeft" className="gate2" />
          <img src={goBackToLicenceAndCertifications} alt="goBackToLicenceAndCertifications" className="backWordSign" />
          <div className="links">
          <div className="link-item">
              <a href="https://github.com/hasibarrafiul" target="_blank" rel="noopener noreferrer">
                  <Fab variant="extended">
                      <GitHub sx={{ mr: 1 }} />
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;GitHub &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  </Fab>
              </a>
          </div>
          <div className="link-item">
              <a href="https://www.linkedin.com/in/hasibarrafiul/" target="_blank" rel="noopener noreferrer">
                  <Fab variant="extended">
                      <LinkedIn sx={{ mr: 1 }} />
                      LinkedIn
                  </Fab>
              </a>
          </div>
          <br></br>
          <div className="link-item">
              <a href="https://stackoverflow.com/users/10941617/hasib-ar-rafiul-fahim" target="_blank" rel="noopener noreferrer">
                  <Fab variant="extended">
                      <StackOverflowIcon sx={{ mr: 1 }} />
                        Stack Overflow
                  </Fab>
              </a>
          </div>
          <div className="link-item">
              <a href="mailto:hasibarrafiulfahim@gmail.com">
                  <Fab variant="extended">
                      <Email sx={{ mr: 1 }} />
                      Email
                  </Fab>
              </a>
          </div>
          <h1 className='myName'>Thank you for your time! &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</h1>
          </div>
          <img src={spriteImage} alt="Sprite" className="sprite" style={{
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
