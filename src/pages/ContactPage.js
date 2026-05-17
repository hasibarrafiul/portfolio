import React from 'react';
import Fab from '@mui/material/Fab';
import Email from '@mui/icons-material/Email';
import GitHub from '@mui/icons-material/GitHub';
import LinkedIn from '@mui/icons-material/LinkedIn';
import SvgIcon from '@mui/material/SvgIcon';
import { platform, gate, swipeLeft, goBackToLicenceAndCertifications } from '../images/imageIndex';
import SpriteCharacter from '../components/SpriteCharacter';
import OrientationDialog from '../components/OrientationDialog';

function StackOverflowIcon(props) {
  return (
    <SvgIcon {...props} viewBox="0 0 24 24">
      <path d="M15 21h-10v-2h10v2zm6-11.665l-1.621-9.335-1.993.346 1.62 9.335 1.994-.346zm-5.964 6.937l-9.746-.975-.186 2.016 9.755.879.177-1.92zm.538-2.587l-9.276-2.608-.526 1.954 9.306 2.5.496-1.846zm1.204-2.413l-8.297-4.864-1.029 1.743 8.298 4.865 1.028-1.744zm1.866-1.467l-5.339-7.829-1.672 1.14 5.339 7.829 1.672-1.14zm-2.644 4.195v8h-12v-8h-2v10h16v-10h-2z"/>
    </SvgIcon>
  );
}

export default function ContactPage({
  spriteImage, spritePositionX, mirror, isPortrait, dialogOpen,
  handleDialogClose, prevPage, pageNumber, handleSwipeLeftClick
}) {
  const animationClass = prevPage > pageNumber ? 'slideLeft' : 'slideRight';

  return (
    <div className={`certificates ${animationClass} custom-background2`}>
      <div>
        {isPortrait && (
          <OrientationDialog open={dialogOpen} handleClose={handleDialogClose} />
        )}
      </div>
      <div className="platformContainer">
        <img src={platform} alt="Platform" className="platform" />
        <img src={gate} alt="Gate2" className="gate2" />
        <img
          src={swipeLeft}
          alt="SwipeLeft"
          className="gate2"
          onClick={handleSwipeLeftClick}
        />
        <img
          src={goBackToLicenceAndCertifications}
          alt="Go Back"
          className="backWordSign"
        />
        <div className="links">
          <div className="link-item">
            <a href="https://github.com/hasibarrafiul" target="_blank" rel="noopener noreferrer">
              <Fab variant="extended">
                <GitHub sx={{ mr: 1 }} />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;GitHub &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              </Fab>
            </a>
          </div>
          <div className="link-item">
            <a href="https://www.linkedin.com/in/hasibarrafiul/" target="_blank" rel="noopener noreferrer">
              <Fab variant="extended">
                <LinkedIn sx={{ mr: 1 }} />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;LinkedIn&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              </Fab>
            </a>
          </div>
          <br />
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
                &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Email&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              </Fab>
            </a>
          </div>
          <div className="center-container">
            <h1 className='myName'>Thank you for your time! <a href="https://www.vecteezy.com/free-vector/gui" className="center-link">©Vecteezy</a></h1>
          </div>
        </div>
        <SpriteCharacter
          spriteImage={spriteImage}
          positionX={spritePositionX}
          mirror={mirror}
        />
      </div>
    </div>
  );
}