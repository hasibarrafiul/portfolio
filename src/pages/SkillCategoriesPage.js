import React from 'react';
import { platform } from '../images/imageIndex';
import SpriteCharacter from '../components/SpriteCharacter';
import NavigationArrows from '../components/NavigationArrows';
import OrientationDialog from '../components/OrientationDialog';
import DirectionSign from '../components/DirectionSign';
import { skillCategories } from '../data/portfolioData';

export default function SkillCategoriesPage({
  spriteImage, spritePositionX, mirror, isPortrait, dialogOpen,
  handleDialogClose, prevPage, pageNumber, handleSwipeRightClick, handleSwipeLeftClick
}) {
  const animationClass = prevPage > pageNumber ? 'slideLeft' : 'slideRight';

  return (
    <div className={`careerDiv ${animationClass} custom-background2`}>
      <div>
        {isPortrait && (
          <OrientationDialog open={dialogOpen} handleClose={handleDialogClose} />
        )}
      </div>
      <div className="skillsContainer">
        {skillCategories.map((category, index) => (
          <div key={index} className="skillBox">
            <h2 className="skillBoxTitle">{category.title}</h2>
            <div className="skillBoxItems">
              {category.items.map((item, i) => (
                <span key={i} className="skillTag">{item}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="platformContainer">
        <img src={platform} alt="Platform" className="platform" />
        <DirectionSign direction="left" pageName="Home" />
        <DirectionSign direction="right" pageName="SYSystem" />
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