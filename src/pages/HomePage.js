import React from 'react';
import { platform, gate, swipeRight } from '../images/imageIndex';
import SpriteCharacter from '../components/SpriteCharacter';
import OrientationDialog from '../components/OrientationDialog';
import DirectionSign from '../components/DirectionSign';

export default function HomePage({
  spriteImage, spritePositionX, mirror, isPortrait, dialogOpen,
  handleDialogClose, prevPage, pageNumber, handleSwipeRightClick
}) {
  const animationClass = prevPage > pageNumber ? 'slideLeft' : 'slideRight';

  return (
    <div className={`mainMenu ${animationClass} custom-background`}>
      <div>
        {isPortrait && (
          <OrientationDialog open={dialogOpen} handleClose={handleDialogClose} />
        )}
      </div>
      <div className="centerContainer">
        <div className='myInformationScreen'>
          <h1 className="myName">I am Hasib Ar Rafiul Fahim</h1>
          <h3 className="myTitle">I am a Software Engineer with 4 years building production-grade SaaS and ERP systems across healthcare, energy, and enterprise domains in Japan and Bangladesh.</h3>
          <p className="myDescription">
            Experienced in full-stack development with React, Node.js, Python and other modern technologies.
          </p>
          <p className="myDescription">I currently live in Tokyo, Japan. I also have a passion for game development and enjoy exploring it as a creative outlet.</p>
        </div>
      </div>
      <div className="platformContainer">
        <img src={platform} alt="Platform" className="platform" />
        <img src={gate} alt="Gate" className="gate" />
        <img
          src={swipeRight}
          alt="SwipeRight"
          className="gate"
          onClick={handleSwipeRightClick}
        />
        <DirectionSign direction="right" pageName="Skill Highlights" />
        <SpriteCharacter
          spriteImage={spriteImage}
          positionX={spritePositionX}
          mirror={mirror}
        />
      </div>
    </div>
  );
}