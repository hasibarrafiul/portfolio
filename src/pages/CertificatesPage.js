import React from 'react';
import { platform, goBackToProjects, goToContactAndLinks } from '../images/imageIndex';
import * as images from '../images/imageIndex';
import SpriteCharacter from '../components/SpriteCharacter';
import NavigationArrows from '../components/NavigationArrows';
import OrientationDialog from '../components/OrientationDialog';
import Billboard from '../components/Billboard';
import { certificatesData } from '../data/portfolioData';

export default function CertificatesPage({
  spriteImage, spritePositionX, mirror, isPortrait, dialogOpen,
  handleDialogClose, prevPage, pageNumber, handleSwipeRightClick,
  handleSwipeLeftClick, certificatePositions
}) {
  const animationClass = prevPage > pageNumber ? 'slideLeft' : 'slideRight';

  // Map certificate IDs to image imports
  const getCertificateImage = (certId) => {
    const imageMap = {
      6: images.certificate6,
      5: images.certificate5,
      4: images.certificate4,
      3: images.certificate3,
      2: images.certificate2,
      1: images.certificate1
    };
    return imageMap[certId] || images.certificate1;
  };

  return (
    <div className={`certificates ${animationClass} custom-background2`}>
      <div>
        {isPortrait && (
          <OrientationDialog open={dialogOpen} handleClose={handleDialogClose} />
        )}
      </div>
      <div className="platformContainer">
        <img src={platform} alt="Platform" className="platform" />

        {certificatesData.map((cert) => (
          <Billboard
            key={cert.id}
            image={getCertificateImage(cert.id)}
            link={cert.link}
            alt={cert.alt}
            position={certificatePositions[`certificate${cert.id}position`]}
          />
        ))}

        <NavigationArrows
          onSwipeRight={handleSwipeRightClick}
          onSwipeLeft={handleSwipeLeftClick}
        />
        <img src={goBackToProjects} alt="Go Back To Projects" className="backWordSign" />
        <img src={goToContactAndLinks} alt="Go To Contact" className="forwardSign" />
        <SpriteCharacter
          spriteImage={spriteImage}
          positionX={spritePositionX}
          mirror={mirror}
        />
      </div>
    </div>
  );
}