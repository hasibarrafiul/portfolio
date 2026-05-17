import React, { useEffect } from 'react';
import './App.css';
import useGameNavigation from './hooks/useGameNavigation';
import useOrientation from './hooks/useOrientation';
import HomePage from './pages/HomePage';
import SkillCategoriesPage from './pages/SkillCategoriesPage';
import SysystemPage from './pages/SysystemPage';
import SynapTechPage from './pages/SynapTechPage';
import PersonalProjectsPage from './pages/PersonalProjectsPage';
import ContactPage from './pages/ContactPage';

function App() {
  const {
    spritePositionX, mirror, spriteImage, pageNumber, prevPage,
    billboardPositions,
    setIsGamePaused, handleMove
  } = useGameNavigation();

  const { isPortrait, dialogOpen, handleDialogClose } = useOrientation();

  // Pause game in portrait mode
  useEffect(() => {
    setIsGamePaused(isPortrait);
  }, [isPortrait, setIsGamePaused]);

  // Keyboard arrow listeners
  useEffect(() => {
    const handleKeyDown = (event) => {
      switch (event.key) {
        case 'ArrowRight':
          handleMove('right', 'keyboard');
          break;
        case 'ArrowLeft':
          handleMove('left', 'keyboard');
          break;
        default:
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleMove]);

  // Mouse wheel listener
  useEffect(() => {
    const handleWheel = (event) => {
      if (event.deltaY > 0) {
        handleMove('right', 'keyboard');
      } else if (event.deltaY < 0) {
        handleMove('left', 'keyboard');
      }
    };

    window.addEventListener('wheel', handleWheel);
    return () => window.removeEventListener('wheel', handleWheel);
  }, [handleMove]);

  // Touch swipe listener
  useEffect(() => {
    let startX = null;

    const handleTouchStart = (event) => {
      startX = event.touches[0].clientX;
    };

    const handleTouchEnd = (event) => {
      if (startX === null) return;
      const endX = event.changedTouches[0].clientX;
      const deltaX = startX - endX;

      if (Math.abs(deltaX) < 30) return;

      if (deltaX > 0) {
        handleMove('right', 'touch');
      } else {
        handleMove('left', 'touch');
      }
    };

    window.addEventListener('touchstart', handleTouchStart);
    window.addEventListener('touchend', handleTouchEnd);
    return () => {
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchend', handleTouchEnd);
    };
  }, [handleMove]);

  // Button click handlers
  const handleSwipeRightClick = () => {
    handleMove('right', 'touch');
  };

  const handleSwipeLeftClick = () => {
    handleMove('left', 'touch');
  };

  return (
    <div className="custom-background">
      {pageNumber === 1 && (
        <HomePage
          spriteImage={spriteImage}
          spritePositionX={spritePositionX}
          mirror={mirror}
          isPortrait={isPortrait}
          dialogOpen={dialogOpen}
          handleDialogClose={handleDialogClose}
          prevPage={prevPage}
          pageNumber={pageNumber}
          handleSwipeRightClick={handleSwipeRightClick}
        />
      )}

      {pageNumber === 2 && (
        <SkillCategoriesPage
          spriteImage={spriteImage}
          spritePositionX={spritePositionX}
          mirror={mirror}
          isPortrait={isPortrait}
          dialogOpen={dialogOpen}
          handleDialogClose={handleDialogClose}
          prevPage={prevPage}
          pageNumber={pageNumber}
          handleSwipeRightClick={handleSwipeRightClick}
          handleSwipeLeftClick={handleSwipeLeftClick}
        />
      )}

      {pageNumber === 3 && (
        <SysystemPage
          spriteImage={spriteImage}
          spritePositionX={spritePositionX}
          mirror={mirror}
          isPortrait={isPortrait}
          dialogOpen={dialogOpen}
          handleDialogClose={handleDialogClose}
          prevPage={prevPage}
          pageNumber={pageNumber}
          handleSwipeRightClick={handleSwipeRightClick}
          handleSwipeLeftClick={handleSwipeLeftClick}
          billboardPositions={billboardPositions}
        />
      )}

      {pageNumber === 4 && (
        <SynapTechPage
          spriteImage={spriteImage}
          spritePositionX={spritePositionX}
          mirror={mirror}
          isPortrait={isPortrait}
          dialogOpen={dialogOpen}
          handleDialogClose={handleDialogClose}
          prevPage={prevPage}
          pageNumber={pageNumber}
          handleSwipeRightClick={handleSwipeRightClick}
          handleSwipeLeftClick={handleSwipeLeftClick}
        />
      )}

      {pageNumber === 5 && (
        <PersonalProjectsPage
          spriteImage={spriteImage}
          spritePositionX={spritePositionX}
          mirror={mirror}
          isPortrait={isPortrait}
          dialogOpen={dialogOpen}
          handleDialogClose={handleDialogClose}
          prevPage={prevPage}
          pageNumber={pageNumber}
          handleSwipeRightClick={handleSwipeRightClick}
          handleSwipeLeftClick={handleSwipeLeftClick}
        />
      )}

      {pageNumber === 6 && (
        <ContactPage
          spriteImage={spriteImage}
          spritePositionX={spritePositionX}
          mirror={mirror}
          isPortrait={isPortrait}
          dialogOpen={dialogOpen}
          handleDialogClose={handleDialogClose}
          prevPage={prevPage}
          pageNumber={pageNumber}
          handleSwipeLeftClick={handleSwipeLeftClick}
        />
      )}
    </div>
  );
}

export default App;