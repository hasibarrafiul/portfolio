import React from 'react';
import { platform } from '../images/imageIndex';
import SpriteCharacter from '../components/SpriteCharacter';
import NavigationArrows from '../components/NavigationArrows';
import OrientationDialog from '../components/OrientationDialog';
import DirectionSign from '../components/DirectionSign';
import { educationData, certificationsData, languagesData, publicationsData } from '../data/portfolioData';

export default function EducationPage({
  spriteImage, spritePositionX, mirror, isPortrait, dialogOpen,
  handleDialogClose, prevPage, pageNumber, handleSwipeRightClick,
  handleSwipeLeftClick
}) {
  const animationClass = prevPage > pageNumber ? 'slideLeft' : 'slideRight';

  return (
    <div className={`educationPage ${animationClass} custom-background2`}>
      <div>
        {isPortrait && (
          <OrientationDialog open={dialogOpen} handleClose={handleDialogClose} />
        )}
      </div>

      <div className="educationContainer">
        {/* EDUCATION SECTION */}
        <div className="educationSection">
          <h2 className="sectionTitle">🎓 EDUCATION</h2>
          <div className="educationCards">
            {educationData.map((edu) => (
              <div key={edu.id} className="educationCard">
                <div className="eduHeader">
                  <h3 className="eduDegree">{edu.degree}</h3>
                  <span className="eduYear">{edu.year}</span>
                </div>
                <p className="eduInstitution">{edu.institution}</p>
                <p className="eduSpecialization">{edu.specialization}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CERTIFICATIONS SECTION */}
        <div className="certificationsSection">
          <h2 className="sectionTitle">🏆 CERTIFICATIONS & AWARDS</h2>
          <div className="certificationsGrid">
            {certificationsData.map((cert) => (
              <div key={cert.id} className="certificationCard">
                <div className="certBadge">
                  <span className="certAchievement">{cert.achievement}</span>
                </div>
                <h3 className="certTitle">{cert.title}</h3>
                <p className="certDate">{cert.date}</p>
              </div>
            ))}
          </div>
        </div>

        {/* LANGUAGES SECTION */}
        <div className="languagesSection">
          <h2 className="sectionTitle">🌍 LANGUAGES</h2>
          <div className="languagesGrid">
            {languagesData.map((lang) => (
              <div key={lang.id} className="languageCard">
                <h3 className="languageName">{lang.language}</h3>
                <p className="languageProficiency">{lang.proficiency}</p>
              </div>
            ))}
          </div>
        </div>

        {/* PUBLICATIONS SECTION */}
        <div className="publicationsSection">
          <h2 className="sectionTitle">📄 PUBLICATIONS</h2>
          <div className="publicationsGrid">
            {publicationsData.map((pub) => (
              <div key={pub.id} className="publicationCard">
                <h3 className="pubTitle">{pub.title}</h3>
                <a href={pub.url} target="_blank" rel="noopener noreferrer" className="pubViewBtn">
                  View Publication
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="platformContainer">
        <img src={platform} alt="Platform" className="platform" />
        <DirectionSign direction="left" pageName="Personal Projects" />
        <DirectionSign direction="right" pageName="Contact & Links" />
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
