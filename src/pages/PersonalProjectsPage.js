import React from 'react';
import { platform, goBackToCareer, goToContactAndLinks } from '../images/imageIndex';
import SpriteCharacter from '../components/SpriteCharacter';
import NavigationArrows from '../components/NavigationArrows';
import OrientationDialog from '../components/OrientationDialog';
import { personalProjectsInfo, personalProjects } from '../data/portfolioData';

export default function PersonalProjectsPage({
  spriteImage, spritePositionX, mirror, isPortrait, dialogOpen,
  handleDialogClose, prevPage, pageNumber, handleSwipeRightClick,
  handleSwipeLeftClick
}) {
  const animationClass = prevPage > pageNumber ? 'slideLeft' : 'slideRight';

  return (
    <div className={`gameProjects ${animationClass} custom-background2`}>
      <div>
        {isPortrait && (
          <OrientationDialog open={dialogOpen} handleClose={handleDialogClose} />
        )}
      </div>

      <div className="companyInfoBox" style={{ top: '3%' }}>
        <div className="companyInfoRow" style={{ justifyContent: 'center' }}>
          <span className="companyName">{personalProjectsInfo.title}</span>
        </div>
      </div>

      <div className="projectsFixedContainerSynaptech">
        {personalProjects.map((project) => {
          let sizeClass = 'projectBillboardMed';
          return (
            <div
              key={project.id}
              className={`projectBillboardFixed ${sizeClass}`}
            >
              <h3 className="projectBillboardTitle">{project.title}</h3>
              <p className="projectBillboardTech">{project.tech}</p>
              <ul className="projectBillboardHighlights">
                {project.highlights.map((h, i) => (
                  <li key={i}>{h}</li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>

      <div className="platformContainer">
        <img src={platform} alt="Platform" className="platform" />
        <img src={goBackToCareer} alt="Go Back To SynapTech" className="backWordSign" />
        <img src={goToContactAndLinks} alt="Go To Certificates" className="forwardSign" />
        <NavigationArrows
          onSwipeRight={handleSwipeRightClick}
          onSwipeLeft={handleSwipeLeftClick}
        />
        <SpriteCharacter
          spriteImage={spriteImage}
          positionX={spritePositionX}
          mirror={mirror}
        />
      </div>
    </div>
  );
}
