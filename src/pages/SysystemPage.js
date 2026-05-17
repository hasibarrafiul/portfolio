import React from 'react';
import { platform, goBackToCareer, goToContactAndLinks } from '../images/imageIndex';
import SpriteCharacter from '../components/SpriteCharacter';
import NavigationArrows from '../components/NavigationArrows';
import OrientationDialog from '../components/OrientationDialog';
import { sysystemCompany, sysystemProjects } from '../data/portfolioData';

export default function SysystemPage({
  spriteImage, spritePositionX, mirror, isPortrait, dialogOpen,
  handleDialogClose, prevPage, pageNumber, handleSwipeRightClick,
  handleSwipeLeftClick, billboardPositions
}) {
  const animationClass = prevPage > pageNumber ? 'slideLeft' : 'slideRight';

  return (
    <div className={`gameProjects ${animationClass} custom-background2`}>
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
        <img src={goBackToCareer} alt="Go Back To Skill Highlight" className="backWordSign" />
        <img src={goToContactAndLinks} alt="Go To SynapTech" className="forwardSign" />
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
