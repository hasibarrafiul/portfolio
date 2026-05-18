import React from 'react';
import { platform, gate, swipeLeft } from '../images/imageIndex';
import SpriteCharacter from '../components/SpriteCharacter';
import OrientationDialog from '../components/OrientationDialog';
import DirectionSign from '../components/DirectionSign';
import { contactLinks } from '../data/portfolioData';
import Email from '@mui/icons-material/Email';
import GitHub from '@mui/icons-material/GitHub';
import LinkedIn from '@mui/icons-material/LinkedIn';
import SvgIcon from '@mui/material/SvgIcon';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';

function StackOverflowIcon(props) {
  return (
    <SvgIcon {...props} viewBox="0 0 24 24">
      <path d="M15 21h-10v-2h10v2zm6-11.665l-1.621-9.335-1.993.346 1.62 9.335 1.994-.346zm-5.964 6.937l-9.746-.975-.186 2.016 9.755.879.177-1.92zm.538-2.587l-9.276-2.608-.526 1.954 9.306 2.5.496-1.846zm1.204-2.413l-8.297-4.864-1.029 1.743 8.298 4.865 1.028-1.744zm1.866-1.467l-5.339-7.829-1.672 1.14 5.339 7.829 1.672-1.14zm-2.644 4.195v8h-12v-8h-2v10h16v-10h-2z" />
    </SvgIcon>
  );
}

const getIcon = (iconStr) => {
  switch (iconStr) {
    case 'github': return <GitHub className="contact-icon" sx={{ color: '#ffd700' }} />;
    case 'linkedin': return <LinkedIn className="contact-icon" sx={{ color: '#ffd700' }} />;
    case 'stackoverflow': return <StackOverflowIcon className="contact-icon" sx={{ color: '#ffd700' }} />;
    case 'email': return <Email className="contact-icon" sx={{ color: '#ffd700' }} />;
    default: return null;
  }
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

      <div id="contactPageContainer" className="educationContainer" style={{ top: '1%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <div className="educationSection" style={{ width: '100%', maxWidth: '800px' }}>
          <h2 className="sectionTitle" style={{ textAlign: 'center' }}>📬 CONTACT & LINKS</h2>

          <div className="certificationsGrid" style={{ marginTop: '20px' }}>
            {contactLinks.map((link) => (
              <a key={link.id} href={link.url} target={link.id === 'email' ? "_self" : "_blank"} rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
                <div className="certificationCard">
                  <div className="certBadge">
                    {getIcon(link.icon)}
                  </div>
                  <h3 className="certTitle">{link.label}</h3>
                </div>
              </a>
            ))}

            {/* Download Resume */}
            <a href="https://drive.google.com/file/d/1B5DSKrkp6M1ONfG7s0hjYRq97SeEOEC1/view?usp=sharing" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', gridColumn: '1 / -1' }}>
              <div className="certificationCard" style={{ borderColor: 'rgba(100, 200, 255, 0.5)' }}>
                <div className="certBadge" style={{ borderColor: 'rgba(100, 200, 255, 0.5)', background: 'rgba(100, 200, 255, 0.25)' }}>
                  <PictureAsPdfIcon className="contact-icon" sx={{ color: '#64c8ff' }} />
                </div>
                <h3 className="certTitle" style={{ color: '#fff' }}>Download Resume</h3>
              </div>
            </a>
          </div>

          <div className="center-container" style={{ marginTop: '30px' }}>
            <h1 className='myName'>Thank you for your time!</h1>
          </div>
        </div>
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
        <DirectionSign direction="left" pageName="Education" />
        <SpriteCharacter
          spriteImage={spriteImage}
          positionX={spritePositionX}
          mirror={mirror}
        />
      </div>
    </div>
  );
}