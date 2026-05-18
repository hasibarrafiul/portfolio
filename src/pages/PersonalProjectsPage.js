import React from 'react';
import { platform } from '../images/imageIndex';
import SpriteCharacter from '../components/SpriteCharacter';
import NavigationArrows from '../components/NavigationArrows';
import OrientationDialog from '../components/OrientationDialog';
import ProjectCard from '../components/ProjectCard';
import DirectionSign from '../components/DirectionSign';
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
        {personalProjects.map((project) => (
          <ProjectCard key={project.id} project={project} sizeClass="projectBillboardMed" />
        ))}
      </div>

      <div className="platformContainer">
        <img src={platform} alt="Platform" className="platform" />
        <DirectionSign direction="left" pageName="SynapTech" />
        <DirectionSign direction="right" pageName="Education" />
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
