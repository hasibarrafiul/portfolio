import React from 'react';
import { platform } from '../images/imageIndex';
import SpriteCharacter from '../components/SpriteCharacter';
import NavigationArrows from '../components/NavigationArrows';
import OrientationDialog from '../components/OrientationDialog';
import ProjectCard from '../components/ProjectCard';
import DirectionSign from '../components/DirectionSign';
import { sysystemCompany, sysystemProjects } from '../data/portfolioData';

export default function SysystemPage({
  spriteImage, spritePositionX, mirror, isPortrait, dialogOpen,
  handleDialogClose, prevPage, pageNumber, handleSwipeRightClick,
  handleSwipeLeftClick, billboardPositions
}) {
  const animationClass = prevPage > pageNumber ? 'slideLeft' : 'slideRight';

  return (
    <div id="sysystem-page" className={`gameProjects ${animationClass} custom-background2`}>
      <div>
        {isPortrait && (
          <OrientationDialog open={dialogOpen} handleClose={handleDialogClose} />
        )}
      </div>

      {/* Company info box at top */}
      <div className="companyInfoBox" style={{ top: '3%' }}>
        <div className="companyInfoRow">
          <span className="companyName">{sysystemCompany.name}</span>
          <span className="companyLocation">{sysystemCompany.location}</span>
        </div>
        <div className="companyInfoRow">
          <span className="companyRole">{sysystemCompany.role}</span>
          <span className="companyPeriod">{sysystemCompany.period}</span>
        </div>
      </div>

      {/* Fixed project billboards in a flex row */}
      <div className="projectsFixedContainer">
        {sysystemProjects.map((project) => {
          let sizeClass = 'projectBillboardMed';
          if (project.id === 1) sizeClass = 'projectBillboardSlim';
          if (project.id === 2) sizeClass = 'projectBillboardWide';
          return (
            <ProjectCard key={project.id} project={project} sizeClass={sizeClass} />
          );
        })}
      </div>

      <div className="platformContainer">
        <img src={platform} alt="Platform" className="platform" />
        <DirectionSign direction="left" pageName="Skill Highlights" />
        <DirectionSign direction="right" pageName="SynapTech" />
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
