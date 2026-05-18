import React from 'react';
import { platform } from '../images/imageIndex';
import SpriteCharacter from '../components/SpriteCharacter';
import NavigationArrows from '../components/NavigationArrows';
import OrientationDialog from '../components/OrientationDialog';
import ProjectCard from '../components/ProjectCard';
import DirectionSign from '../components/DirectionSign';
import { synapTechCompany, synapTechProjects } from '../data/portfolioData';

export default function SynapTechPage({
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
        <div className="companyInfoRow">
          <span className="companyName">{synapTechCompany.name}</span>
          <span className="companyLocation">{synapTechCompany.location}</span>
        </div>
        <div className="companyInfoRow">
          <span className="companyRole">{synapTechCompany.role}</span>
          <span className="companyPeriod">{synapTechCompany.period}</span>
        </div>
      </div>

      <div className="projectsFixedContainerSynaptech">
        {synapTechProjects.map((project) => (
          <ProjectCard key={project.id} project={project} sizeClass="projectBillboardMed" />
        ))}
      </div>

      <div className="platformContainer">
        <img src={platform} alt="Platform" className="platform" />
        <DirectionSign direction="left" pageName="SYSystem" />
        <DirectionSign direction="right" pageName="Personal Projects" />
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